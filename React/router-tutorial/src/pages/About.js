//import { useLocation } from "react-router-dom"; //쿼리스트링을 사용하기 위해 설정
import { useSearchParams } from "react-router-dom";

const About = () => {
    //const location = useLocation(); //useLocation은 location 객체를 반환, 이 객체는 현재 사용자가 보고 있는 페이지의 정보를 지님
    const [searchParms, setSearchParams] = useSearchParams();
    const detail = searchParms.get('detail');
    const mode = searchParms.get('mode');

    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === 'true' ? false : true }) //'true' 같이 따옴표로 감싸서 비교를 해야함!, 
        //parseInt를 사용하여 숫자 타입으로 변환
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1; //mode 값을 항상 1로 설정(참이면 1반환 거짓이면 0+1=1 반환)
        setSearchParams({ mode: nextMode, detail });
    }

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>detail:{detail}</p>
            <p>mode:{detail}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>

        </div>
    );
} //.search는 주소창의 라우팅을 마친 다음 맨 앞의 ? 문자를 포함한 쿼리스트링 값

export default About;