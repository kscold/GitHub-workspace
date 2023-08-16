// pages/Study/index.tsx
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import {
  FilterTags,
  PageContainer,
  TagButton,
  StudyComponent,
  StudyWrapper,
  GroupButton,
  StudySerach,
} from "./StudyCSS";
import { useRouter } from "next/router";
import { IUseditem } from "../../src/commons/types/generated/types";
import fetchStudyGroups from "../../src/components/units/study/fetchStudyGroups";

const StudyRoom = (): JSX.Element => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [renderStudy, setRenderStudy] = useState<IUseditem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]); // 추가된 부분
  const [maxCounts, setMaxCounts] = useState<Record<string, number>>({});
  const [joinedGroups, setJoinedGroups] = useState<Record<string, boolean>>({});

  const router = useRouter();

  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const TAGS_CACHE_KEY = "studyTags";

  useEffect(() => {
    localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(selectedTags));
    fetchData(1);
  }, [selectedTags, searchQuery]);

  const fetchMaxCount = (useditemId: string): number => {
    const targetGroup = renderStudy.find((group) => group._id === useditemId);
    return parseInt(targetGroup?.tags[targetGroup?.tags.length - 1]);
  };

  useEffect(() => {
    const newMaxCounts: Record<string, number> = {};

    renderStudy.forEach((group) => {
      newMaxCounts[group._id] = fetchMaxCount(group._id);
    });

    setMaxCounts(newMaxCounts);
  }, [renderStudy]);

  const onSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    setRenderStudy([]);
  };

  // StudyComponent 컴포넌트 클릭 시 확장 상태를 토글하는 함수
  const toggleExpansion = (itemId: string) => {
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter((id) => id !== itemId)
        : [...prevExpanded, itemId]
    );
  };

  const fetchData = async (currentPage: number) => {
    try {
      const studyGroups = await fetchStudyGroups(currentPage, searchQuery);
      if (currentPage === 1) {
        setRenderStudy(studyGroups);
      } else {
        setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]);
      }
      if (studyGroups.length > 0) {
        setPage(currentPage + 1);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching study groups:", error);
    }
  };

  const deleteStudyGroup = async (useditemId: string) => {
    try {
      const response = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
            mutation {
              deleteUseditem(useditemId: "${useditemId}")
            }
          `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.data.data.deleteUseditem === useditemId) {
        setRenderStudy((prevQuestions) =>
          prevQuestions.filter((q) => q._id !== useditemId)
        );
        alert("게시글이 성공적으로 삭제되었습니다.");
      }
    } catch {
      alert("게시글 작성자만 삭제할 수 있습니다.");
    }
  };

  const uniqueTags = Array.from(
    new Set(renderStudy.flatMap((q) => q.tags))
  ).filter((_, index) => index !== 3);

  const onClickTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 3) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    } else {
      setSelectedTags((prevTags) => [tag, ...prevTags.slice(0, 2)]);
    }

    setPage(1);
    setRenderStudy([]);
  };

  const filteredStudyGroups =
    selectedTags.length > 0
      ? renderStudy.filter(
          (group) => selectedTags.some((tag) => group.tags?.includes(tag)) // .some을 통해 or 검색을 함
        )
      : renderStudy;

  const loadMoreStudy = async () => {
    if (!hasMore || loadingMore) return;

    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const studyGroups = await fetchStudyGroups(nextPage);

      if (studyGroups.length > 0) {
        setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]);
        setPage(nextPage);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more study groups:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const updateStudyCount = async (useditemId: string, increment: boolean) => {
    const targetGroup = renderStudy.find((group) => group._id === useditemId);
    const updatedCount = increment
      ? targetGroup.price + 1
      : targetGroup.price - 1;
    try {
      const updatedStudyGroups = renderStudy.map((studyGroup) => {
        if (studyGroup._id === useditemId) {
          return {
            ...studyGroup,
            price: studyGroup.price + 1,
          };
        }
        return studyGroup;
      });

      const response = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
            mutation UpdateUseditem($useditemId: ID!, $price: Int!) {
              updateUseditem(
                useditemId: $useditemId,
                updateUseditemInput: {
                  price: $price
                }
              ) {
                _id
                price
              }
            }
          `,
          variables: {
            useditemId: useditemId,
            price: updatedCount,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const updatedStudy = response.data.data.updateUseditem;
      if (updatedStudy && updatedStudy._id) {
        const updatedRenderStudy = renderStudy.map((study) =>
          study._id === useditemId
            ? {
                ...study,
                price: updatedStudy.price,
              }
            : study
        );
        setRenderStudy(updatedRenderStudy);
      } else {
        console.error("스터디 참여 업데이트 실패");
      }
    } catch (error) {
      console.error("스터디 참가 에러 발생:", error);
    }
  };

  const toggleJoined = async (useditemId: string) => {
    const prevJoined = joinedGroups[useditemId] || false;

    // 이 부분을 수정합니다.
    const maxCount = maxCounts[useditemId]; // 이전 코드: maxCounts[useditemId]
    const currentCount = renderStudy.find(
      (group) => group._id === useditemId
    )?.price;

    if (!prevJoined && currentCount >= maxCount) {
      alert("인원이 가득 찼습니다.");
      return;
    }

    setJoinedGroups({
      ...joinedGroups,
      [useditemId]: !prevJoined,
    });

    try {
      // 함수 이름 변경 확인: updateUseditem → updateStudyCount
      await updateStudyCount(useditemId, !prevJoined);
      if (!prevJoined) {
        alert("스터디에 참가하였습니다!");
      } else {
        alert("스터디에서 퇴장하였습니다!");
      }
    } catch (error) {
      console.error("스터디 참가 에러 발생:", error);
      alert("스터디 참가 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const processTags = (group: IUseditem) => {
    // 최대 4개의 태그를 갖도록 하며, 필요한 경우 빈 태그를 추가한다.
    let tags = group.tags ? [...group.tags] : [];
    while (tags.length < 4) {
      tags.splice(tags.length - 1, 0, "");
    }
    return tags;
  };
  // 각각의 스터디 그룹 태그를 처리한다.
  const processedStudyGroups = renderStudy.map((group) => {
    return { ...group, tags: processTags(group) };
  });

  return (
    <PageContainer>
      <StudyWrapper>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <GroupButton
            onClick={() => {
              router.push("/Study/CreateGroup");
            }}
            style={{ margin: "10px" }}
          >
            스터디 그룹 등록하기
          </GroupButton>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <StudySerach
            placeholder="제목이나 태그 검색"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <FilterTags>
          {uniqueTags && uniqueTags.length > 0 && (
            <FilterTags>
              {uniqueTags.map((tag: any) => (
                <TagButton
                  key={tag}
                  active={selectedTags.includes(tag)}
                  onClick={() => onClickTag(tag)}
                >
                  #{tag}
                </TagButton>
              ))}
            </FilterTags>
          )}
        </FilterTags>

        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreStudy}
          hasMore={hasMore && !loadingMore}
          useWindow={false}
          loader={<div key={0}>Loading...</div>}
        >
          {processedStudyGroups.map((studyGroup) => (
            <StudyComponent
              key={studyGroup._id}
              active={expandedItems.includes(studyGroup._id)}
              onClick={() => toggleExpansion(studyGroup._id)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <h2>{studyGroup.remarks}</h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    {studyGroup.tags
                      ? studyGroup.tags.slice(0, 3).map((tag: any) =>
                          tag ? (
                            <TagButton
                              key={tag}
                              active={selectedTags.includes(tag)}
                              onClick={() => onClickTag(tag)}
                              style={{ margin: "2px" }}
                            >
                              #{tag}
                            </TagButton>
                          ) : null
                        )
                      : null}
                  </div>

                  <p>스터디 회장: {studyGroup.name}</p>
                </div>
              </div>
              {expandedItems.includes(studyGroup._id) && (
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: studyGroup.contents,
                    }}
                  />

                  <button onClick={() => toggleJoined(studyGroup._id)}>
                    {joinedGroups[studyGroup._id]
                      ? "스터디 퇴장"
                      : "스터디 참가"}
                  </button>
                  <span style={{ marginLeft: "10px" }}>
                    스터디참가: {studyGroup.price}/{studyGroup.tags[3]}
                    {/* 수정된 부분 */}
                  </span>
                  <div style={{ paddingLeft: "91%" }}>
                    <button onClick={() => deleteStudyGroup(studyGroup._id)}>
                      게시글 삭제
                    </button>
                  </div>
                </div>
              )}
            </StudyComponent>
          ))}
        </InfiniteScroll>
      </StudyWrapper>
    </PageContainer>
  );
};

export default StudyRoom;

// Solver 전용 게시글로 거르기 위해
// pages/Study/index.tsx
// import React, { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroller";
// import axios from "axios";
// import {
//   FilterTags,
//   PageContainer,
//   TagButton,
//   StudyComponent,
//   StudyWrapper,
//   GroupButton,
//   StudySerach,
// } from "./StudyCSS";
// import { useRouter } from "next/router";
// import { Useditem } from "./DataInterface";
// import fetchStudyGroups from "../../src/components/units/study/fetchStudyGroups";

// const StudyRoom = (): JSX.Element => {
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [renderStudy, setRenderStudy] = useState<Useditem[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const router = useRouter();

//   const [hasMore, setHasMore] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);

//   const TAGS_CACHE_KEY = "studyTags";

//   useEffect(() => {
//     localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(selectedTags));
//     fetchData(1);
//   }, [selectedTags, searchQuery]);

//   const onSearch = (query: string) => {
//     setSearchQuery(query);
//     setPage(1);
//     setRenderStudy([]);
//   };

//   const fetchData = async (currentPage: number) => {
//     try {
//       const studyGroups = await fetchStudyGroups(currentPage, searchQuery);

//       // 원하는 조건에 맞는 데이터만 필터링
//       const filteredStudyGroups = studyGroups.filter((group: any) =>
//         group.tags.includes("Solver")
//       );

//       if (currentPage === 1) {
//         setRenderStudy(studyGroups);
//       } else {
//         setRenderStudy((prevStudy) => [...prevStudy, ...filteredStudyGroups]);
//       }
//       if (studyGroups.length > 0) {
//         setPage(currentPage + 1);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching study groups:", error);
//     }
//   };

//   const deleteStudyGroup = async (useditemId: string) => {
//     try {
//       const response = await axios.post(
//         "http://backend-practice.codebootcamp.co.kr/graphql",
//         {
//           query: `
//             mutation {
//               deleteUseditem(useditemId: "${useditemId}")
//             }
//           `,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );

//       if (response.data.data.deleteUseditem === useditemId) {
//         setRenderStudy((prevQuestions) =>
//           prevQuestions.filter((q) => q._id !== useditemId)
//         );
//         alert("게시글이 성공적으로 삭제되었습니다.");
//       }
//     } catch {
//       alert("게시글 작성자만 삭제할 수 있습니다.");
//     }
//   };

//   const uniqueTags = Array.from(new Set(renderStudy.flatMap((q) => q.tags)));

//   const onClickTag = (tag: string) => {
//     if (selectedTags.includes(tag)) {
//       setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
//     } else if (selectedTags.length < 3) {
//       setSelectedTags((prevTags) => [...prevTags, tag]);
//     } else {
//       setSelectedTags((prevTags) => [tag, ...prevTags.slice(0, 2)]);
//     }

//     setPage(1);
//     setRenderStudy([]);
//   };

//   // const filteredStudyGroups =
//   //   selectedTags.length > 0
//   //     ? renderStudy.filter(
//   //         (group) => selectedTags.some((tag) => group.tags.includes(tag)) // .some을 통해 or 검색을 함
//   //       )
//   //     : renderStudy;

//   // const filteredStudyGroups =
//   //   selectedTags.length > 0
//   //     ? renderStudy.filter((group) => {
//   //         if (group.tags[0] === "Solver") {
//   //           return true; // 첫 번째 태그가 "Solver"일 때만 필터링
//   //         }
//   //         return selectedTags.some((tag) => group.tags.includes(tag));
//   //       })
//   //     : renderStudy.filter((group) => group.tags[0] === "Solver");

//   const filteredStudyGroups = renderStudy.filter((group) => {
//     const tagIncludesSolver = group.tags[0] === "Solver";
//     const titleIncludesSearch = group.remarks.includes(searchQuery);
//     const tagsIncludeSearch = group.tags.some((tag) =>
//       tag.includes(searchQuery)
//     );
//     const contentIncludesSearch = group.contents.includes(searchQuery);

//     if (
//       tagIncludesSolver &&
//       (titleIncludesSearch || tagsIncludeSearch || contentIncludesSearch)
//     ) {
//       return true; // "Solver" 태그를 가지고 있고 검색어에 해당하는 게시글은 모두 포함
//     }

//     return false;
//   });

//   const loadMoreStudy = async () => {
//     if (!hasMore || loadingMore) return;

//     try {
//       setLoadingMore(true);
//       const nextPage = page + 1;
//       const studyGroups = await fetchStudyGroups(nextPage);

//       if (studyGroups.length > 0) {
//         setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]);
//         setPage(nextPage);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching more study groups:", error);
//     } finally {
//       setLoadingMore(false);
//     }
//   };

//   return (
//     <PageContainer>
//       <StudyWrapper>
//         <div style={{ display: "flex", justifyContent: "flex-end" }}>
//           <GroupButton
//             onClick={() => {
//               router.push("/Study/CreateGroup");
//             }}
//             style={{ margin: "10px" }}
//           >
//             스터디 그룹 등록하기
//           </GroupButton>
//         </div>

//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <StudySerach
//             placeholder="제목이나 태그 검색"
//             value={searchQuery}
//             onChange={(e) => onSearch(e.target.value)}
//           />
//         </div>

//         <FilterTags>
//           {uniqueTags.length > 0 &&
//             renderStudy
//               .filter((group) => group.tags[0] === "Solver")
//               .flatMap((group) => group.tags.slice(1)) // "Solver" 태그를 제외하고 나머지 태그들을 가져옴
//               .map((tag) => (
//                 <TagButton
//                   key={tag}
//                   active={selectedTags.includes(tag)}
//                   onClick={() => onClickTag(tag)}
//                 >
//                   #{tag}
//                 </TagButton>
//               ))}
//         </FilterTags>

//         <InfiniteScroll
//           pageStart={0}
//           loadMore={loadMoreStudy}
//           hasMore={hasMore && !loadingMore}
//           useWindow={false}
//           loader={<div key={0}>Loading...</div>} // 로딩 표시 추가
//         >
//           {filteredStudyGroups.map((studyGroup) => (
//             <StudyComponent
//               key={studyGroup._id}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <div>
//                 <h2>{studyGroup.remarks}</h2>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: studyGroup.contents,
//                   }}
//                 />
//                 <p style={{ paddingLeft: "90%" }}>
//                   스터디 회장: {studyGroup.name}
//                 </p>
//                 <div>
//                   {studyGroup.tags
//                     .filter((tag) => tag !== "Solver") // "Solver" 태그를 제외한 나머지 태그만 선택
//                     .map((tag) => (
//                       <TagButton
//                         key={tag}
//                         active={selectedTags.includes(tag)}
//                         onClick={() => onClickTag(tag)}
//                         style={{ margin: "2px" }}
//                       >
//                         #{tag}
//                       </TagButton>
//                     ))}
//                 </div>
//                 <div style={{ paddingLeft: "91%" }}>
//                   <button onClick={() => deleteStudyGroup(studyGroup._id)}>
//                     게시글 삭제
//                   </button>
//                 </div>
//               </div>
//             </StudyComponent>
//           ))}
//         </InfiniteScroll>
//       </StudyWrapper>
//     </PageContainer>
//   );
// };

// export default StudyRoom;
