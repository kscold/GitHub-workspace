// import { Observable } from "@apollo/client"; // 아폴로클라이언트에서 제공되는 옵저버블
import { from } from "zen-observable"; // 옵저버블을 만들어 주는 것을 from이라고 함

export default function ObservableFlatmapPage(): JSX.Element {
  const onClickButton = (): void => {
    // new Promise((resolve, reject) => {})
    // new Observable((observer)=>{})

    from(["1번 useQuery", "2번 useQuery", "3qjs useQuery"]) // fromPromise
      .flatMap((el) => from([`${el} 결과에 qqq적용`, `${el} 결과에 zzz적용`])) // 즉 flatMap은 from의 들어있는 배열을 하나 하나씩 제공해줌
      .subscribe((el) => {
        // 옵저버블을 실행시키기 위해 적용해야함
        console.log(el);
      });
  };

  return <button onClick={onClickButton}>클릭</button>;
}
