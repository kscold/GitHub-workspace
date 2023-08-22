// import { useMutation, gql } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
// import type {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../../src/commons/types/generated/types";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");

  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);

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
      if (typeof event.target?.result === "string")
        // 읽어온 정보가 문자열 일때만
        setImageUrl(event.target?.result); // 이미지 URL로 저장
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsync(onChangeFile)} />
      <img src={imageUrl} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
    </>
  );
}
