import styled from "styled-components";

const categories = [
    {
        naem: 'all',
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

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit; //색깔을 상속받음
    padding-bottom: 0.25rem;

    &:hover { //Category에 마우스 커서가 올라가면 색깔이 바뀜
        color: #495057;
    }

    & + &{ //CatergoriesBlock과 Category 사이에 margin-left가 1rem
        margin-left: 1rem;
    }
`;


const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => ( //categories 배열을 객채로 뿌려
                <Category key={c.name}>{c.text}</Category> //Category css에 넣음
            ))}
        </CategoriesBlock>
    )
}

export default Categories