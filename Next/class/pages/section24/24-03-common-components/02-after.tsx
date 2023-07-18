import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.vaildation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
  phone: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema), // Ineterface와 schema 갯수가 일치해야 오류가 안남
    mode: "onChange", // 검증하는 조건 바뀔 때마다 검증을 하겠다
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("리렌더링 되나요?");

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자:{" "}
      <Input01
        // 여기서 type는 props로 넘어가는 type으로 password나 text를  결정
        register={register("writer")}
      />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <Input01 register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <Input01 register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <Button01
        title="등록하기"
        isActive={formState.isValid} // 여기서 true false의 boolean값이 넘어감
      />
    </form>
  );
}

/*
    <button type="reset">지우자!!</button>
    <button type="submit">등록하자!!</button> // 기본값
*/
