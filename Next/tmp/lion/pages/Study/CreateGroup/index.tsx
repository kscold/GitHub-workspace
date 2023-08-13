// pages/Study/CreateGroup/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css"; // 리액트 퀼의 스타일 파일
import axios from "axios"; // axios 임포트
import {
  Cen,
  FormWrapper,
  MovieContainer,
  SubmitButton,
  TitleInput,
} from "./CreateGroup";
import QuillEditor from "../../../src/components/commons/QuillEditor";

const CreateGroup: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                  contents: "${content}",
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
      }
      // 예시: 저장이 완료되면 글 목록 페이지로 이동
      router.push("/Study");
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <div>
      <Cen>
        <MovieContainer>
          <h2>글쓰기</h2>
        </MovieContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <TitleInput
            placeholder="제목"
            onChange={handleTitleChange}
            value={title}
          />
          <QuillEditor value={content} onChange={handleContentChange} />
          <SubmitButton type="submit">입력</SubmitButton>
        </FormWrapper>
      </Cen>
    </div>
  );
};

export default CreateGroup;
