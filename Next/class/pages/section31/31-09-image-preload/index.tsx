import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = []; // 전역변수로 설정하는 것이 중요 => 리렌더링이 되더라도 유지되기 때문
// 이렇게 된 데이터는 브라우저의 데이터를 계속 먹기 때문에 꼭 사용하는 값에만 전역변수로 설정

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    // 이런식으로 useEffect로 주소를 받아놓으면
    // 현재 페이지에서 다음 페이지 이미지 url를 몰래 다운받아놓음
    const img = new Image();
    img.src =
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRWWl0PO7qFWCsi9Wvf57JmYbfLEWqWWx1mBqinse1nEvEnyomeU-Uuq_3snC1fh_nr50svczyRaZbOvBk&psig=AOvVaw3xnWh7tRa1_hJHH1WLm0jc&ust=1692881033034000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCND7xLbn8oADFQAAAAAdAAAAABAE";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  const onClickMove = (): void => {
    void router.push("/section31/31-09-image-preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
