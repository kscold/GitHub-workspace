// /pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global, css } from "@emotion/react";
import { RecoilRoot } from "recoil";

const globalStyles = css`
  body {
    margin: 0; // 기본 마진 삭제
  }

  * {
    // 모든 스타일에 적용
    font-family: "myfont";
  }

  @font-face {
    font-family: "myfont"; // 여기에 폰트 엘리먼트 추가하여 폰트를 지정
    src: url("/fonts/ArialCEItalic.ttf");
  }

  @font-face {
    font-family: "Cafe24Ohsquare-v2.0";
    src: url("/fonts/Cafe24Ohsquare-v2.0.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </RecoilRoot>
  );
}
