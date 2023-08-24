import type {
  // ChangeEvent,
  FormEvent,
} from "react";

// prettier-ignore
export const wrapAsync =
  <E>(asyncFunc: (event: E) => Promise<void>) => (event: E) => {
    // 이렇게 재네릭 형식을 써서 만듬 두개 event 형식이 똑같음 타입이 추론됨
    void asyncFunc(event);
  };

// export const wrapAsync =
//   (asyncFunc: (event: ChangeEvent<HTMLInputElement>) => Promise<void>) =>
//   (event: ChangeEvent<HTMLInputElement>) => {
//     void asyncFunc(event);
//   };

export const wrapFormAsync = // 기본적으로 백엔드로 보낼려고 하기 때문에 리프레쉬를 함
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 이벤트 방지
    void asyncFunc();
  };
