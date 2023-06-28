import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from './pages/About';
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from './pages/Home';
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />   {/* index는 path="/"와 같음 */}
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />  {/* 자동적으로 articles/번호가 id에 매핑됨 */}
      </Route>  {/* /articles/:id가 아니라 Outlet 컴포넌트를 사용하여 이런식으로 children으로 만들어 주면 중텁괸 라우트가 보여짐*/}
    </Routes>
  );
};

export default App;