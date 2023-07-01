import { useState, useEffect } from 'react';
import styled from "styled-components"
import NewItem from "./NewsItem"
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){ //스크린화면이 지정한 768px보다 작을 경우 적용
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sampleArticle = {
//     title: '제목',
//     descripton: '내용',
//     url: 'https: //google.com',
//     urlToImage: 'https: //via.placeholder.com/160',
// }

const NewsList = ({ category }) => {  //NewsList.category를 한번에 입력하기 위해 {}를 사용
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => { //주의 할 점은 useEffect에 등록하는 함수에 async를 붙이면 안됨, 왜냐하면 useEffect에서 반환해야 하는 값은 뒷정리 함수이기 때문
        const fetchData = async () => { //async를 사용하는 함수 따로 선언
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c77f5337872a4688a1ebd82fca07dc98`,
                )
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };//여기까지 함수를 정의해주고
        fetchData(); //바로 함수를 파라미터로 사용하기 위해 호출
    }, [category]); //category 값이 바뀔 때마다 뉴스를 새로 불러와야 하기 때문에 useEffect의 의존 배열을 넣어 주어야함

    // 대기 중일 때 Promise로 따지면 대기중 비동기 처리 로직이 아직 완료되지 않은 상태
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    //아직 articles 값이 설정되지 않았을 때
    if (!articles) { //map 함수를 사용하기 전에 꼭 !articles를 조회하여 해당 값이 현재 null이 아닌지 검사 이 작업이 없으면 아직 데이터가 없을 때
        //null에는 map함수가 없기 때문에 렌더링 과정에서 오류가 발생함
        return null;
    }

    //articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map(article => ( //반복 작업을 없애기 위해 .map함수로 뿌려줌
                <NewItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList