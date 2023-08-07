import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/@:username" element={<WritePage />}>
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
