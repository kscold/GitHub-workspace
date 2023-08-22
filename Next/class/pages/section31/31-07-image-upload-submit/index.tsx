import { useMutation, gql } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      #variable($) 설정을 해놓았으므로 밑에서 값을 입력할 수 있음
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [나의함수] = useMutation(나의그래프큐엘셋팅); // 등록할 때는 id가 필요없으므로 등록후 id를 받아오기 위한 초기 세팅
  const [uploadFile] = useMutation<
    // 등록 후 url을 받아옴
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        // 꼭 필요한 title ,contents를 포함해서 createBoard 뮤테이션을 날림
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
          images: [url],
        },
      },
    });
    console.log(result); // 등록되었나 로그를 찍어 확인
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때 여러개 드래그 가능
    if (file === undefined) return;
    console.log("파일까지 나옴");

    // const result = await uploadFile({ variables: { file } })
    // console.log(result.data?.uploadFile.url);
    // setImageUrl(result.data?.uploadFile.url ?? "")

    // 1. 임시URL 생성 => (가URL - 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file); // 최근에 나온 기능이기 때문에 적용이 안되는 브라우저도 있음
    // console.log(result);

    // 2. 임시URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      // 파일 읽기 작업이 완료되면
      console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint 가 잡았던 이유: event.target은 태그만을 가르키지 않음
      if (typeof event.target?.result === "string") {
        // 읽어온 정보가 문자열 일때만
        setImageUrl(event.target?.result); // 이미지 URL로 저장
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsync(onChangeFile)} />
      <img src={imageUrl} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

      <button onClick={wrapAsync(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
