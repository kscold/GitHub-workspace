import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps): JSX.Element {
  // 모든 페이지에서 할 수 있는 공통세팅

  return (
    // 모든 페이지에서 Apollo 세팅한 것을 내려주고 있기 때문에 다른 페이지들에서 기능을 사용할 수 있다.
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}
