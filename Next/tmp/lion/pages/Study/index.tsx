// // pages/Study/index.tsx
// import React, { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroller";
// import axios from "axios";
// import {
//   FilterTags,
//   PageContainer,
//   TagButton,
//   QuestionCard,
//   StudyWrapper,
//   GroupButton,
// } from "./StudyCSS";
// import { useRouter } from "next/router";
// import { Useditem } from "./DataInterface";
// import fetchStudyGroups from "../../src/components/units/study/fetchStudyGroups";

// const StudyRoom = (): JSX.Element => {
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [renderStudy, setRenderStudy] = useState<Useditem[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const router = useRouter();

//   // const [loadedStudyGroups, setLoadedStudyGroups] = useState<Useditem[]>([]);
//   const [hasMore, setHasMore] = useState(true);

//   const [loadingMore, setLoadingMore] = useState(false); // 로딩 상태 추가

//   const TAGS_CACHE_KEY = "studyTags";

//   useEffect(() => {
//     // Store tags in cache
//     localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(selectedTags));
//     fetchData(1); // 페이지를 1로 초기화하여 첫 페이지부터 데이터를 불러옵니다.
//   }, [selectedTags]);

//   const fetchData = async (currentPage: number) => {
//     try {
//       const studyGroups = await fetchStudyGroups(currentPage);
//       setRenderStudy(studyGroups);
//       if (currentPage === 1) {
//         setRenderStudy(studyGroups);
//       } else {
//         setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]);
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

//   // 백엔드에 관리자 게시글 삭제 로직이 있다면 이런식으로 작성
//   // const [isAdmin, setIsAdmin] = useState<boolean>(false); // 관리자 여부를 boolean 값으로 변경

//   // useEffect(() => {
//   //   // 사용자 정보 조회 후 관리자 여부 판단
//   //   fetchUserAdminStatus();
//   // }, []);

//   // const fetchUserAdminStatus = async () => {
//   //   try {
//   //     const UserDataResponse = await axios.post(
//   //       "http://backend-practice.codebootcamp.co.kr/graphql",
//   //       {
//   //         query: `
//   //         query {
//   //           fetchUserLoggedIn {
//   //             email
//   //             name
//   //           }
//   //         }
//   //       `,
//   //       },
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   //         },
//   //       }
//   //     );

//   //     if (
//   //       UserDataResponse.data.data &&
//   //       UserDataResponse.data.data.fetchUserLoggedIn
//   //     ) {
//   //       const user = UserDataResponse.data.data.fetchUserLoggedIn;

//   //       // 관리자 아이디라고 가정하고 isAdmin 상태를 true로 설정
//   //       if (user.email === "admin@example.com") {
//   //         setIsAdmin(true); // 관리자 여부 설정
//   //       }
//   //     }
//   //   } catch (error) {
//   //     console.error("관리자 여부 조회 에러:", error);
//   //   }
//   // };

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
//         // 삭제 성공 시 해당 게시글을 상태에서 제거
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
//     // 최대 3개의 태그까지 선택 가능하도록 처리
//     if (selectedTags.includes(tag)) {
//       setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
//     } else if (selectedTags.length < 3) {
//       setSelectedTags((prevTags) => [...prevTags, tag]);
//     } else {
//       setSelectedTags((prevTags) => [tag, ...prevTags.slice(0, 2)]); // 최대 선택 개수 초과 시 첫 번째 선택한 태그를 대체
//     }

//     setPage(1); // 태그를 변경하면 페이지를 1로 초기화하여 첫 페이지부터 불러옵니다.
//     setRenderStudy([]); // 선택한 태그에 따라 renderStudy 초기화
//   };

//   const filteredStudyGroups =
//     selectedTags.length > 0
//       ? renderStudy.filter((group) =>
//           selectedTags.every((tag) => group.tags.includes(tag))
//         )
//       : renderStudy;

//   const loadMoreStudy = async () => {
//     if (!hasMore || loadingMore) return; // 이미 로딩 중인 경우 무시

//     try {
//       setLoadingMore(true); // 로딩 시작
//       const nextPage = page + 1;
//       const studyGroups = await fetchStudyGroups(nextPage);

//       if (studyGroups.length > 0) {
//         // setLoadedStudyGroups((prevStudy) => [...prevStudy, ...studyGroups]);
//         setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]);
//         setPage(nextPage);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching more study groups:", error);
//     } finally {
//       setLoadingMore(false); // 로딩 종료
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
//         <FilterTags>
//           {/*
//             uniqueTags의 길이가 0일 경우에는 태그를 렌더링하지 않습니다.
//             uniqueTags가 존재할 때만 태그를 렌더링하도록 수정합니다.
//           */}
//           {uniqueTags.length > 0 &&
//             uniqueTags.map((tag) => (
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
//           hasMore={hasMore}
//           useWindow={false}
//         >
//           {filteredStudyGroups.map((studyGroup) => (
//             <QuestionCard
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
//                 <p>태그: {studyGroup.tags.join(", ")}</p>
//                 <button onClick={() => deleteStudyGroup(studyGroup._id)}>
//                   게시글 삭제
//                 </button>
//               </div>
//             </QuestionCard>
//           ))}
//         </InfiniteScroll>
//       </StudyWrapper>
//     </PageContainer>
//   );
// };

// export default StudyRoom;

// pages/Study/index.tsx
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import {
  FilterTags,
  PageContainer,
  TagButton,
  QuestionCard,
  StudyWrapper,
  GroupButton,
} from "./StudyCSS";
import { useRouter } from "next/router";
import { Useditem } from "./DataInterface";
import fetchStudyGroups from "../../src/components/units/study/fetchStudyGroups";

const StudyRoom = (): JSX.Element => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [renderStudy, setRenderStudy] = useState<Useditem[]>([]);
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const TAGS_CACHE_KEY = "studyTags";

  useEffect(() => {
    localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(selectedTags));
    fetchData(1);
  }, [selectedTags]);

  const fetchData = async (currentPage: number) => {
    try {
      const studyGroups = await fetchStudyGroups(currentPage);
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

  const uniqueTags = Array.from(new Set(renderStudy.flatMap((q) => q.tags)));

  // useEffect(() => {
  //   uniqueTags;
  // }, []);

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
          (group) => selectedTags.some((tag) => group.tags.includes(tag)) // .some을 통해 or 검색을 함
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
        <FilterTags>
          {uniqueTags.length > 0 &&
            uniqueTags.map((tag) => (
              <TagButton
                key={tag}
                active={selectedTags.includes(tag)}
                onClick={() => onClickTag(tag)}
              >
                #{tag}
              </TagButton>
            ))}
        </FilterTags>

        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreStudy}
          hasMore={hasMore}
          useWindow={false}
        >
          {filteredStudyGroups.map((studyGroup) => (
            <QuestionCard
              key={studyGroup._id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <h2>{studyGroup.remarks}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: studyGroup.contents,
                  }}
                />
                <p style={{ paddingLeft: "90%" }}>
                  스터디 회장: {studyGroup.name}
                </p>
                <p>태그: {studyGroup.tags.join(", ")}</p>
                <button onClick={() => deleteStudyGroup(studyGroup._id)}>
                  게시글 삭제
                </button>
              </div>
            </QuestionCard>
          ))}
        </InfiniteScroll>
      </StudyWrapper>
    </PageContainer>
  );
};

export default StudyRoom;
