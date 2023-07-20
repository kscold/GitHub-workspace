import * as yup from "yup";

export const schema = yup.object({
  //  구조 변수는 주로 schema라고 부름
  // yup으로 조건 만들기
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),

  email: yup
    .string()
    .email("내용을 입력해주세요.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력입니다."),
  // boardAddress: yup.object().shape({
  //   addressDetail: yup.string().required("주소를 입력해주세요."),
  // }),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다.") // ^ $이렇게 시작과 끝을 만들어줘야지 정확하게 인식
    .required("휴대폰은 필수 입력입니다."),
});
