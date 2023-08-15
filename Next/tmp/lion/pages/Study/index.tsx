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
  const itemsPerPage = 100;
  const [selectedItem, setSelectedItem] = useState<Useditem | null>(null);
  const router = useRouter();

  const [hasMore, setHasMore] = useState(true);

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

  useEffect(() => {
    // 초기화 시에 스터디 그룹 정보를 받아오는 함수 호출
    fetchStudyGroups();
  }, []);

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
              page: 1
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
        const studyGroups = response.data.data.fetchUseditems; // 수정: fetchUseditems에서 데이터를 가져옴
        setRenderStudy(studyGroups); // 수정: 받아온 스터디 그룹 정보를 상태 변수에 저장
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

  const handleTagClick = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
    setRenderStudy([]);
  };

  const filteredQuestions = selectedTag
    ? renderStudy.filter((q) => q.tags.includes(selectedTag))
    : renderStudy;

  const loadMoreStudy = () => {
    if (!hasMore) return; // 이미 더 이상 데이터를 가져올 필요가 없을 경우 종료
    setHasMore(false); // 데이터 가져오는 중에 재진입을 막기 위해 false로 설정

    const nextPage = page + 1;
    setPage(nextPage);
  };

  useEffect(() => {
    if (page > 1) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, renderStudy.length);
      const newQuestions = renderStudy.slice(startIndex, endIndex);

      setTimeout(() => {
        setRenderStudy((prevQuestions) => [...prevQuestions, ...newQuestions]);
        setHasMore(true); // 데이터가 추가되면 다시 true로 설정
      }, 500);
    }
  }, [page, renderStudy]);

  return (
    <PageContainer>
      <StudyWrapper>
        <FilterTags>
          {uniqueTags.map((tag) => (
            <TagButton
              key={tag}
              active={selectedTag === tag}
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </TagButton>
          ))}
        </FilterTags>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <GroupButton
            onClick={onClickCreateStudyGroup}
            style={{ margin: "10px" }}
          >
            예시 스터디 그룹 등록
          </GroupButton>
          <GroupButton
            onClick={() => {
              router.push("/Study/CreateGroup"); // 버튼을 클릭하면 CreateGroup 페이지로 이동
            }}
            style={{ margin: "10px" }}
          >
            스터디 그룹 등록하기
          </GroupButton>
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreStudy}
          hasMore={hasMore} // 추가
          useWindow={false}
        >
          {renderStudy.map((studyGroup) => (
            <QuestionCard
              key={studyGroup._id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div>
                {/* 스터디 그룹 정보를 화면에 출력 */}
                <h2>{studyGroup.remarks}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: studyGroup.contents, // Quill 에디터 내용을 그대로 렌더링
                  }}
                />
                <p style={{ paddingLeft: "90%" }}>
                  스터디 회장: {studyGroup.name}
                </p>

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
