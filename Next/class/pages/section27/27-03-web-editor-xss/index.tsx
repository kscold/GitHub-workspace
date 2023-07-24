import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const router = useRouter();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const { register, setValue, trigger, handleSubmit } = useForm({
    // 리엑트 폼에 handleSubmit이 onClickSubmit에 data 값을 넘겨줌
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어옴
  const onChangeContents = (value: string): void => {
    // 이때는 event가 아니라 string이 들어감
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value); // 아무것도 입력하지 않았을 때 빈값으로 작성해줘

    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능!!
    void trigger("contents");
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });

    const { Modal } = await import("antd"); // 필요없는 상태에서 값을 처음부터 가져오기 때문에 필요성을 느낄때만 다운 받게 만듬
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });

    const boardId = result.data.createBoard._id;
    void router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
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
