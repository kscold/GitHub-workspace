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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]); // 파일들이 들어갈 수 있는 배열로 설정

  const [나의함수] = useMutation(나의그래프큐엘셋팅); // 등록할 때는 id가 필요없으므로 등록후 id를 받아오기 위한 초기 세팅
  const [uploadFile] = useMutation<
    // 등록 후 url을 받아옴
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile

    // 1-1) 안좋은예제 - await를 매번 기다림 => for문 사용해도 마찬가지(이유: i 값에 의존하기 때문에...)
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[0] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2];

    // 1-2) 좋은예제 - Promise.all 사용
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0, url1, url2] map을 통해서 값을 보내고 그 값을 뽑아냄

    // 1-3) 좋은예제 - Promise.all 사용 => 리팩토링
    // const files = [File0, File1, File2];
    // files.map((el) => uploadFile({ variables: { file: files[0] } }));

    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } })) // for 문이랑 다름 for는 인덱스의 영향을 받는데 map은 받지 않음
      // 따라서 for 문안에서의 await와는 다르고 map 안에 await는 사용이 가능함
    );
    console.log(results);
    const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0, url1, url2]

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        // 꼭 필요한 title ,contents를 포함해서 createBoard 뮤테이션을 날림
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
          images: resultUrls, // resultUrls 자체가 배열이기 때문에
        },
      },
    });
    console.log(result); // 등록되었나 로그를 찍어 확인
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
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

          const tempUrls = [...imageUrls]; // imageUrls의 배열을 복사해옴
          tempUrls[index] = event.target?.result; // 이벤트의 결과값을 선택한 순서의 배열을 넣음
          setImageUrls(tempUrls); // 선택한 순서의 이미지 Url를 설정

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={wrapAsync(onChangeFile(0))} />
      {/* HOF(High Order Funtion)을 사용해서 만듬 */}
      <input type="file" onChange={wrapAsync(onChangeFile(1))} />
      <input type="file" onChange={wrapAsync(onChangeFile(2))} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <button onClick={wrapAsync(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
