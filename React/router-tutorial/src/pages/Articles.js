import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            <Outlet /> {/* Article 컴포넌트에서 제공하는 Outlet 컴포넌트 Route의 children으로 들어감*/}
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Articles;