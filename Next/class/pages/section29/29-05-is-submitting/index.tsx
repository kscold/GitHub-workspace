import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 게시글 등록하기 버튼이라고 가정!!
  const onClicksync = async (): Promise<void> => {
    setIsSubmitting(true);

    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data.title);

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={wrapAsync(onClicksync)} disabled={isSubmitting}>
        REST_API(동기) 요청하기
      </button>
    </div>
  );
}
