import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = () => {
    const params = useParams();
    const category = params.category || 'all'; //카데고리가 선택되지 않았으면 기본값으로 all 사용

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    )
}

export default NewsPage;