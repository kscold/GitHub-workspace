// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어옴
  const onChangeContents = (value: string): void => {
    // 이때는 event가 아니라 string이 들어감
    console.log(value);
  };

  //   useEffect(() => {
  //     async function aaa(): Promise<void> {
  //       // 그러나 필요할 때 다운 받으면 너무 느리므로 렌더링 가장 마지막에 다운로드 받게 만들어 놓음
  //       const { Modal } = await import("antd"); // code-splitting(코드스플리팅)
  //       Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  //     }
  //     void aaa(); // 함수 사용
  //   }, []);

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // 필요없는 상태에서 값을 처음부터 가져오기 때문에 필요성을 느낄때만 다운 받게 만듬
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
