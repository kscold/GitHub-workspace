// pages/Study/CreateGroup/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css"; // 리액트 퀼의 스타일 파일
import axios from "axios"; // axios 임포트
import {
  ContentWrapper,
  SubmitButton,
  StudyFormWrapper,
  StudyTitleInput,
  StudyTitleContainer,
} from "./CreateGroup";
import QuillEditor from "../../../src/components/commons/QuillEditor";

const CreateGroup = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]); //태그를 여러개 설정할 수 있으므로 배열로 선언
  const [tagInput, setTagInput] = useState<string>(""); // 태그하나를 설정하는데 들어가는 인풋 값

  const router = useRouter();

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event: any) => {
    setContent(event);
  };

  const onTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 태그를 설정하는 인풋 이벤트
    setTagInput(event.target.value);
  };

  const addTag = () => {
    // 태그 추가
    if (tagInput.trim() !== "" && tags.length < 3) {
      // 길이?
      // 최대 태그를 3개싸지 설정, .trim은 좌우 공백을 제거하는 함수
      setTags([...tags, tagInput]);
      setTagInput("");
    } else {
      alert("태그는 최대 3개까지 등록가능합니다.");
    }
  };

  const removeTag = (index: number) => {
    // 태그를 제거하는 함수
    const newTags = tags.filter((_, currentIndex) => currentIndex !== index); // 같으면 false를 반환하게 만들어서 원하는 값을 찾음, true 값만 유지
    setTags(newTags);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // 사용자 정보 조회
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

      if (
        UserDataResponse.data.data &&
        UserDataResponse.data.data.fetchUserLoggedIn
      ) {
        const UserData = UserDataResponse.data.data.fetchUserLoggedIn;
        const userName = UserData.name;

        // 여기에서 작성한 글을 서버에 저장하는 로직을 구현
        const saveDataResponse = await axios.post(
          "http://backend-practice.codebootcamp.co.kr/graphql",
          {
            query: `
              mutation {
                createUseditem(createUseditemInput: {
                  name: "${userName}",
                  remarks: "${title}",
                  contents: ${JSON.stringify(content)},
                  price: 0,
                  tags: ${JSON.stringify(tags)},
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

        alert("스터디 등록에 성공했습니다!");
        router.push("/Study", undefined, { shallow: true }); // 목록 페이지로 돌아갈 때 데이터 유지
        // fetchStudyGroups(); // 스터디 그룹 등록 후 목록 업데이트
      }
    } catch (error) {
      console.error("스터디 등록 에러 발생:", error);
    }
  };

  return (
    <ContentWrapper>
      <StudyTitleContainer>
        <h2>글쓰기</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            addTag();
          }}
        >
          <label>tag</label>
          <input onChange={onTagInputChange} value={tagInput} />
          <button type="submit">태그 추가</button>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {tags.map((tag, index) => (
            <div key={index}>
              {tag}
              <button onClick={() => removeTag(index)}>삭제</button>
            </div>
          ))}
        </div>
      </StudyTitleContainer>
      <StudyFormWrapper onSubmit={onSubmit}>
        <StudyTitleInput
          placeholder="스터디 이름"
          onChange={onChangeTitle}
          value={title}
        />
        <QuillEditor value={content} onChange={onChangeContent} />

        <SubmitButton type="submit">스터디 등록</SubmitButton>
      </StudyFormWrapper>
    </ContentWrapper>
  );
};

export default CreateGroup;

// Solver 전용 게시글로 거르기 위해
// pages/Study/CreateGroup/index.tsx
// import { useState } from "react";
// import { useRouter } from "next/router";
// import "react-quill/dist/quill.snow.css"; // 리액트 퀼의 스타일 파일
// import axios from "axios"; // axios 임포트
// import {
//   ContentWrapper,
//   SubmitButton,
//   StudyFormWrapper,
//   StudyTitleInput,
//   StudyTitleContainer,
// } from "./CreateGroup";
// import QuillEditor from "../../../src/components/commons/QuillEditor";

// const CreateGroup = (): JSX.Element => {
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [tags, setTags] = useState<string[]>(["Solver"]); //태그를 여러개 설정할 수 있으므로 배열로 선언
//   const [tagInput, setTagInput] = useState<string>(""); // 태그하나를 설정하는데 들어가는 인풋 값

//   const router = useRouter();

//   const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(event.target.value);
//   };

//   const onChangeContent = (event: any) => {
//     setContent(event);
//   };

//   const onTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // 태그를 설정하는 인풋 이벤트
//     setTagInput(event.target.value);
//   };

//   const addTag = () => {
//     // 태그 추가
//     if (tagInput.trim() !== "" && tags.length < 4) {
//       // 길이?
//       // 최대 태그를 3개싸지 설정, .trim은 좌우 공백을 제거하는 함수
//       setTags([...tags, tagInput]);
//       setTagInput("");
//     } else {
//       alert("태그는 최대 3개까지 등록가능합니다.");
//     }
//   };

//   const removeTag = (index: number) => {
//     // 태그를 제거하는 함수
//     const newTags = tags.filter((_, currentIndex) => currentIndex !== index); // 같으면 false를 반환하게 만들어서 원하는 값을 찾음, true 값만 유지
//     setTags(newTags);
//   };

//   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       // 사용자 정보 조회
//       const UserDataResponse = await axios.post(
//         "http://backend-practice.codebootcamp.co.kr/graphql",
//         {
//           query: `
//             query {
//               fetchUserLoggedIn {
//                 email
//                 name
//               }
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

//       if (
//         UserDataResponse.data.data &&
//         UserDataResponse.data.data.fetchUserLoggedIn
//       ) {
//         const UserData = UserDataResponse.data.data.fetchUserLoggedIn;
//         const userName = UserData.name;

//         // 여기에서 작성한 글을 서버에 저장하는 로직을 구현
//         const saveDataResponse = await axios.post(
//           "http://backend-practice.codebootcamp.co.kr/graphql",
//           {
//             query: `
//               mutation {
//                 createUseditem(createUseditemInput: {
//                   name: "${userName}",
//                   remarks: "${title}",
//                   contents: ${JSON.stringify(content)},
//                   price: 0,
//                   tags: ${JSON.stringify(tags)},
//                   images: ["none"]
//                 }) {
//                   _id
//                   name
//                   remarks
//                   contents
//                   price
//                   tags
//                   images
//                 }
//               }
//             `,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//             },
//           }
//         );

//         alert("스터디 등록에 성공했습니다!");
//         router.push("/Study", undefined, { shallow: true }); // 목록 페이지로 돌아갈 때 데이터 유지
//         // fetchStudyGroups(); // 스터디 그룹 등록 후 목록 업데이트
//       }
//     } catch (error) {
//       console.error("스터디 등록 에러 발생:", error);
//     }
//   };

//   return (
//     <ContentWrapper>
//       <StudyTitleContainer>
//         <h2>글쓰기</h2>
//         <form
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//           onSubmit={(event) => {
//             event.preventDefault();
//             addTag();
//           }}
//         >
//           <label>tag</label>
//           <input onChange={onTagInputChange} value={tagInput} />
//           <button type="submit">태그 추가</button>
//         </form>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           {tags.map((tag, index) => (
//             <div key={index}>
//               {tag}
//               <button onClick={() => removeTag(index)}>삭제</button>
//             </div>
//           ))}
//         </div>
//       </StudyTitleContainer>
//       <StudyFormWrapper onSubmit={onSubmit}>
//         <StudyTitleInput
//           placeholder="스터디 이름"
//           onChange={onChangeTitle}
//           value={title}
//         />
//         <QuillEditor value={content} onChange={onChangeContent} />

//         <SubmitButton type="submit">스터디 등록</SubmitButton>
//       </StudyFormWrapper>
//     </ContentWrapper>
//   );
// };

// export default CreateGroup;
