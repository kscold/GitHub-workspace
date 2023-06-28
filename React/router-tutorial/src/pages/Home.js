import { Link } from 'react-router-dom' //리엑트에서는 a태그로 라우팅을 하면 페이지를 이동 할 때 브라우저에서 페이지를 새로 불러오게 되므로 Link를 사용

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/about">소개</Link>
        </div>
    );
};

export default Home;