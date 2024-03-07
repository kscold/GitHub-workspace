import { Route, Routes } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import Profile from './page/Profile';
import Article from './page/Article';
import Articles from './page/Articles';
import Layout from './page/Layout';

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
    </Routes>
  );
};

export default App;
