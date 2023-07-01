import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'entertainment',
        text: '엔터테이먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit; //색깔을 상속받음
    padding-bottom: 0.25rem;

    &:hover { //Category에 마우스 커서가 올라가면 색깔이 바뀜
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + &{ //CatergoriesBlock과 Category 사이에 margin-left가 1rem
        margin-left: 1rem;
    }
`;


// const Categories = ({ onSelect, category }) => { //{}를 쓴 이유는 객체의 인스턴스에 직접 엑세스하기 위해서 Categories.onSelect로 쓰지 않기 위해
//     return (
//         <CategoriesBlock>
//             {categories.map(c => ( //categories 배열을 객채로 뿌려
//                 <Category
//                     key={c.name}
//                     active={category === c.name} //Catrgory props에 props.active에 대한 css 설정이 있음
//                     onClick={() => onSelect(c.name)}
//                 >
//                     {c.text}
//                 </Category> //Category css에 넣음
//             ))}
//         </CategoriesBlock>
//     )
// }


const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    className={({ isActive }) => (isActive ? 'active' : undefined)}  // isActive NavLink에 있는 속성
                    to={c.name === 'all' ? '/' : `/${c.name}`} //전체보기는 /로 설정 나머지 카데고리는 c.name로 각 카데고리 이름으로 설정
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}


export default Categories