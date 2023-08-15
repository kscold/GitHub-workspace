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

const StudyRoom = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [renderStudy, setRenderStudy] = useState<Useditem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<Useditem | null>(null);
  const router = useRouter();

  const [loadedStudyGroups, setLoadedStudyGroups] = useState<Useditem[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const CACHE_DURATION = 3600000; // 1 hour in milliseconds
  const TAGS_CACHE_KEY = "studyTags";

  useEffect(() => {
    // Load tags from cache if available
    const cachedTags = localStorage.getItem(TAGS_CACHE_KEY);
    if (cachedTags) {
      setRenderStudy(JSON.parse(cachedTags));
    }
    fetchStudyGroups();
  }, [selectedTag]);

  useEffect(() => {
    // Store tags in cache
    localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(renderStudy));
  }, [renderStudy]);

  // 백엔드에 관리자 게시글 삭제 로직이 있다면 이런식으로 작성
  // const [isAdmin, setIsAdmin] = useState<boolean>(false); // 관리자 여부를 boolean 값으로 변경

  // useEffect(() => {
  //   // 사용자 정보 조회 후 관리자 여부 판단
  //   fetchUserAdminStatus();
  // }, []);

  // const fetchUserAdminStatus = async () => {
  //   try {
  //     const UserDataResponse = await axios.post(
  //       "http://backend-practice.codebootcamp.co.kr/graphql",
  //       {
  //         query: `
  //         query {
  //           fetchUserLoggedIn {
  //             email
  //             name
  //           }
  //         }
  //       `,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     );

  //     if (
  //       UserDataResponse.data.data &&
  //       UserDataResponse.data.data.fetchUserLoggedIn
  //     ) {
  //       const user = UserDataResponse.data.data.fetchUserLoggedIn;

  //       // 관리자 아이디라고 가정하고 isAdmin 상태를 true로 설정
  //       if (user.email === "admin@example.com") {
  //         setIsAdmin(true); // 관리자 여부 설정
  //       }
  //     }
  //   } catch (error) {
  //     console.error("관리자 여부 조회 에러:", error);
  //   }
  // };

  const CreateStudyGroup = async () => {
    try {
      const UserDataResponse = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
            query {
              fetchUserLoggedIn {
                email
                name
              }
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

      console.log(
        "UserDataResponse.data:",
        UserDataResponse.data.data.fetchUserLoggedIn.name
      );

      if (
        UserDataResponse.data.data &&
        UserDataResponse.data.data.fetchUserLoggedIn
      ) {
        const UserData = UserDataResponse.data.data.fetchUserLoggedIn;
        const userName = UserData.name;

        const response = await axios.post(
          "http://backend-practice.codebootcamp.co.kr/graphql",
          {
            query: `
              mutation {
                createUseditem(createUseditemInput: {
                  name: "${userName}",
                  remarks: "예시 스터디 그룹 설명",
                  contents: "예시 스터디 그룹 내용",
                  price: 0,
                  tags: ["예시", "스터디", "그룹"],
                  images: ["none"]
                }) {
                  _id
                  name
                  remarks
                  contents
                  price
                  tags
                  images
                }
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

        if (response.data.data.createUseditem) {
          alert("예시 스터디 그룹이 성공적으로 등록되었습니다.");
          setSelectedItem(response.data.data.createUseditem); // 등록한 아이템을 선택
        } else {
          console.log("예시 스터디 그룹 등록 실패");
        }
      } else {
        console.log("데이터가 없거나 fetchUserLoggedIn이 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("예시 스터디 그룹 등록 에러:", error);
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
        // 삭제 성공 시 해당 게시글을 상태에서 제거
        setRenderStudy((prevQuestions) =>
          prevQuestions.filter((q) => q._id !== useditemId)
        );
        alert("게시글이 성공적으로 삭제되었습니다.");
      }
    } catch {
      alert("게시글 작성자만 삭제할 수 있습니다.");
    }
  };

  const fetchStudyGroups = async () => {
    try {
      const response = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
          query {
            fetchUseditems(
              isSoldout: false
              search: ""
              page: ${page}
            ) {
              _id
              name
              remarks
              contents
              price
              tags
           
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
      if (response.data.data) {
        const studyGroups = response.data.data.fetchUseditems;
        setLoadedStudyGroups((prevStudy) => [...prevStudy, ...studyGroups]);
        // 페이지 증가
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error fetching study groups:", error);
    }
  };

  const onClickCreateStudyGroup = async () => {
    await CreateStudyGroup();

    // 새로 생성한 스터디 그룹을 renderStudy의 최상단에 추가
    if (selectedItem) {
      setRenderStudy((prevQuestions) => [selectedItem, ...prevQuestions]);
    }
  };

  const uniqueTags = Array.from(new Set(renderStudy.flatMap((q) => q.tags)));

  const onClickTag = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
    setPage(1); // 태그를 변경하면 페이지를 1로 초기화하여 첫 페이지부터 불러옵니다.
    setRenderStudy([]); // 선택한 태그에 따라 renderStudy 초기화
  };

  const filteredStudyGroups = selectedTag
    ? renderStudy.filter((group) => group.tags.includes(selectedTag))
    : renderStudy;

  const loadMoreStudy = async () => {
    if (!hasMore) return;

    try {
      const nextPage = page + 1;
      const response = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
              query {
                fetchUseditems(
                  isSoldout: false
                  search: ""
                  page: ${nextPage}
                ) {
                  _id
                  name
                  remarks
                  contents
                  price
                  tags
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

      if (response.data.data) {
        const studyGroups = response.data.data.fetchUseditems;

        if (studyGroups.length > 0) {
          setLoadedStudyGroups((prevStudy) => [...prevStudy, ...studyGroups]); // loadedStudyGroups에 추가
          setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups]); // renderStudy에 추가

          setPage(nextPage); // 페이지 증가
          setHasMore(true);
        } else {
          setHasMore(false); // 데이터가 없으면 더 이상 무한 스크롤하지 않도록 설정
        }
      }
    } catch (error) {
      console.error("Error fetching more study groups:", error);
    }
  };

  return (
    <PageContainer>
      <StudyWrapper>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <GroupButton
            onClick={onClickCreateStudyGroup}
            style={{ margin: "10px" }}
          >
            예시 스터디 그룹 등록
          </GroupButton>
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
          {/* 
            uniqueTags의 길이가 0일 경우에는 태그를 렌더링하지 않습니다.
            uniqueTags가 존재할 때만 태그를 렌더링하도록 수정합니다.
          */}
          {uniqueTags.length > 0 &&
            uniqueTags.map((tag) => (
              <TagButton
                key={tag}
                active={selectedTag === tag}
                onClick={() => onClickTag(tag)}
              >
                #{tag}
              </TagButton>
            ))}
        </FilterTags>

        {filteredStudyGroups.length > 0 ? (
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
        ) : (
          <p>해당 태그에 관련된 게시물이 없습니다.</p>
        )}
      </StudyWrapper>
    </PageContainer>
  );
};
export default StudyRoom;
