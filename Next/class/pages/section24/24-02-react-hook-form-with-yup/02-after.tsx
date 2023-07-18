import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.vaildation";

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
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      이메일: <input type="text" {...register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
      비밀번호: <input type="password" {...register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      휴대폰번호: <input type="text" {...register("phone")} />
      <div style={{ color: "red" }}>{formState.errors.phone?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        GRAPHQL-API요청하기
      </button>
    </form>
  );
}

/*
    <button type="reset">지우자!!</button>
    <button type="submit">등록하자!!</button> // 기본값
*/
