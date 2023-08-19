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
import fetchStudyGroups from "../../src/components/units/study/fetchStudyGroups";
import { boardIdState } from "../../src/components/commons/recoilState";
import { useRecoilValue } from "recoil";

const StudyRoom = (): JSX.Element => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [renderStudy, setRenderStudy] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const [joinedGroups, setJoinedGroups] = useState<
    Record<string, { title: string; writer: string }>
  >({});

  const [groupCounts, setGroupCounts] = useState<
    Record<string, { title: number; writer: number }>
  >({});
  const [boardData, setBoardData] = useState<
    { title: string; writer: string }[]
  >([]);
  const [studyData, setStudyData] = useState<
    Array<IUseditem & { boardData: { title: string; writer: string } }>
  >([]);

  const boardId = useRecoilValue(boardIdState);

  const PASSWORD = "Solver_StudyCount";

  const router = useRouter();

  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const TAGS_CACHE_KEY = "studyTags";

  useEffect(() => {
    localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(selectedTags));
    fetchData(1);
  }, [selectedTags, searchQuery]);

  useEffect(() => {
    const updateGroupCounts = async () => {
      try {
        const newBoardData = await Promise.all(
          renderStudy.map(async () => await fetchBoard(studyGroup.board))
        );

        const newJoinedGroups = renderStudy.reduce((acc, studyGroup) => {
          const boardDataItem = newBoardData.find(
            (boardItem) => boardItem._id === studyGroup.board
          );

          const [currentCount, maxCount] = boardDataItem.title
            .split("/")
            .map((s) => parseInt(s));

          acc[studyGroup.board] = {
            title: currentCount,
            writer: maxCount,
          };
          return acc;
        }, {});

        setGroupCounts(newJoinedGroups);
      } catch (error) {
        console.error("스터디 조회 오류: ", error);
      }
    };

    updateGroupCounts();
  }, [renderStudy, boardData]);

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

      const newBoardData = await Promise.all(
        studyGroups.map(async () => await fetchBoard(boardId))
      );

      if (currentPage === 1) {
        setRenderStudy(studyGroups);
        setBoardData(newBoardData); // 게시판 정보 설정
      } else {
        setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]);
        setBoardData((prevBoardData) => [...prevBoardData, ...newBoardData]); // 기존 게시판 정보에 추가
      }

      const newJoinedGroups = studyGroups.reduce((acc) => {
        const boardDataItem = newBoardData.find(
          (boardItem) => boardItem.boardId === boardId
        );

        const [currentCount, maxCount] = boardDataItem.title
          .split("/")
          .map((s) => parseInt(s));

        acc[boardId] = {
          title: currentCount,
          writer: maxCount,
        };
        return acc;
      }, {});

      setGroupCounts(newJoinedGroups);
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

  const uniqueTags = Array.from(new Set(renderStudy.flatMap((q) => q.tags)));

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

  const toggleJoined = async (useditemId: string) => {
    try {
      if (joinedGroups.hasOwnProperty(useditemId)) {
        delete joinedGroups[useditemId];
        setJoinedGroups({ ...joinedGroups });
      } else {
        setJoinedGroups({ ...joinedGroups, [useditemId]: true });
      }
    } catch (error) {
      console.error("스터디 참가 에러 발생:", error);
      alert("스터디 참가 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const fetchBoard = async (boardId: string) => {
    try {
      const response = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
          query {
            fetchBoard(
              boardId: ${boardId}
              ){
                _id
                writer
                title
                contents
              }
          }
        `,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.data.fetchBoard);
      const result = response.data.data.fetchBoard;
      return result;
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  };

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
          {filteredStudyGroups.map((studyGroup) => (
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
                  <button onClick={() => toggleJoined(studyGroup.board)}>
                    {groupCounts[studyGroup.board]?.title >=
                    groupCounts[studyGroup.board]?.writer
                      ? "스터디 퇴장"
                      : "스터디 참가"}
                  </button>

                  <span style={{ marginLeft: "10px" }}>
                {/* 여기서 fetchBoard 함수를 호출하여 필요한 정보를 렌더링합니다. */}
                스터디 참가: {groupCounts[studyGroup.board]?.title}/
                {groupCounts[studyGroup.board]?.writer}
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
// import { IUseditem } from "../../src/commons/types/generated/types";
// import fetchStudyGroups from "../../src/components/units/study/fetchStudyGroups";
// import { boardIdState } from "../../src/components/commons/recoilState";
// import { useRecoilValue } from "recoil";

// const StudyRoom = (): JSX.Element => {
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [renderStudy, setRenderStudy] = useState<IUseditem[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [expandedItems, setExpandedItems] = useState<string[]>([]);
//   const [maxCounts, setMaxCounts] = useState<Record<string, number>>({});
//   const [joinedGroups, setJoinedGroups] = useState<Record<string, boolean>>({});
//   const [boardData, setBoardData] = useState<
//     { title: string; writer: string }[]
//   >([]);

//   const boardId = useRecoilValue(boardIdState);

//   const router = useRouter();

//   const [hasMore, setHasMore] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);

//   const TAGS_CACHE_KEY = "studyTags";

//   useEffect(() => {
//     localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(selectedTags));
//     fetchData(1);
//   }, [selectedTags, searchQuery]);

//   // fetchBoardData 함수 생성
//   const fetchBoardData = async (
//     boardId: string
//   ): Promise<{ title: string; writer: string }> => {
//     try {
//       const {
//         data: { fetchBoard },
//       } = await axios.post(
//         "http://backend-practice.codebootcamp.co.kr/graphql",
//         {
//           query: `
//             query($boardId: ID!) {
//               fetchBoard(
//                 boardId: $boardId
//               ){
//                 _id
//                 writer
//                 title
//               }
//             }
//           `,
//           variables: { boardId },
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       return { title: fetchBoard.title, writer: fetchBoard.writer };
//     } catch (error) {
//       console.error("게시판 조회 오류:", error);
//       return { title: "", writer: "" };
//     }
//   };

//   const fetchData = async (currentPage: number) => {
//     try {
//       const studyGroups = await fetchStudyGroups(currentPage, searchQuery);
//       const newBoardData = await Promise.all(
//         studyGroups.map(
//           async (studyGroup) => await fetchBoardData(studyGroup._id)
//         )
//       );

//       if (currentPage === 1) {
//         setRenderStudy(studyGroups);
//         setBoardData(newBoardData); // 게시판 정보 설정
//       } else {
//         setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]);
//         setBoardData((prevBoardData) => [...prevBoardData, ...newBoardData]); // 기존 게시판 정보에 추가
//       }
//     } catch (error) {
//       console.error("Error fetching study groups:", error);
//     }
//   };

//   const onSearch = (query: string) => {
//     setSearchQuery(query);
//     setPage(1);
//     setRenderStudy([]);
//   };

//   const toggleExpansion = (itemId: string) => {
//     setExpandedItems((prevExpanded) =>
//       prevExpanded.includes(itemId)
//         ? prevExpanded.filter((id) => id !== itemId)
//         : [...prevExpanded, itemId]
//     );
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

//   const filteredStudyGroups =
//     selectedTags.length > 0
//       ? renderStudy.filter((group) =>
//           selectedTags.some((tag) => group.tags?.includes(tag))
//         ) // .some을 통해 or 검색을 함
//       : renderStudy;

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

//   const newJoinedGroups = studyGroups.reduce((acc, studyGroup) => {
//     acc[studyGroup._id] = newBoardData.find(
//       (boardItem) => boardItem.boardId === studyGroup._id
//     );
//     return acc;
//   }, {});

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
//           {uniqueTags &&
//             uniqueTags.map((tag: any) => (
//               <TagButton
//                 key={tag}
//                 active={selectedTags.includes(tag)}
//                 onClick={() => onClickTag(tag)}
//               >
//                 #{tag}
//               </TagButton>
//             ))}
//         </FilterTags>

//         <InfiniteScroll
//           pageStart={0}
//           loadMore={loadMoreStudy}
//           hasMore={hasMore && !loadingMore}
//           useWindow={false}
//           loader={<div key={0}>Loading...</div>}
//         >
//           {filteredStudyGroups.map((studyGroup) => (
//             <StudyComponent
//               key={studyGroup._id}
//               active={expandedItems.includes(studyGroup._id)}
//               onClick={() => toggleExpansion(studyGroup._id)}
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
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <div>
//                     {studyGroup.tags?.slice(0, 3).map((tag: any) => (
//                       <TagButton
//                         key={tag}
//                         active={selectedTags.includes(tag)}
//                         onClick={() => onClickTag(tag)}
//                         style={{ margin: "2px" }}
//                       >
//                         #{tag}
//                       </TagButton>
//                     ))}
//                   </div>
//                   <p>스터디 회장: {studyGroup.name}</p>
//                 </div>
//               </div>
//               {expandedItems.includes(studyGroup._id) &&
//                 boardData.map((boardItem, index) => (
//                   <span key={index} style={{ marginLeft: "10px" }}>
//                     스터디참가: {boardItem.title}/{boardItem.writer}
//                   </span>
//                 ))}
//             </StudyComponent>
//           ))}
//         </InfiniteScroll>
//       </StudyWrapper>
//     </PageContainer>
//   );
// };

// export default StudyRoom;

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
