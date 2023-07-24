// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  }); // setValue 기능을 꺼내와서 react-hook-form의 기능과 onChange기능을 동시에 사용

  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어옴
  const onChangeContents = (value: string): void => {
    // 이때는 event가 아니라 string이 들어감
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value); // 아무것도 입력하지 않았을 때 빈값으로 작성해줘

    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능!!
    void trigger("contents");
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
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
