import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import Profile from './page/Profile';
import Article from './page/Article';
import Articles from './page/Articles';
import Layout from './page/Layout';
import NotFound from './page/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* 가장 마지막에 규칙을 정의함으로써 위의 url를 제외하고는 404 페이지를 띄움 */}
    </Routes>
  );
};

export default App;
