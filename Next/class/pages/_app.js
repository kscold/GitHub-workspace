// import '../styles/globals.css'
//
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {
  //모든 페이지에서 할 수 있는 공통세팅
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() //컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  }) //grapql 세팅

  return ( //모든 페이지에서 Apollo 세팅한 것을 내려주고 있기 때문에 다른 페이지들에서 기능을 사용할 수 있다.
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
