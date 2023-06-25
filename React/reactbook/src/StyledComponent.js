import styled, { css } from 'styled-components';
//단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css를 불러와야 한다.

const sizes = {
    desktop: 1024,
    tablet: 768
};

//배열.reduce(누적값, 현재값, 인덱스, 요소) => {return 결과}, 초깃값);
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}en) {
        ${css(...args)}
    }
    `;

    return acc;
}, {})

const Box = styled.div`
background: ${props => props.color || 'blue'};
padding: 1rem;
display: flex;
width: 1024px;
margin: 0 auto;
    ${media.desktop`width: 768px;`}

/* @media (max-width: 1024px){
    width: 768px;
    }
 
@media(max-width:768px){
        width:100%;
    } */
//동적 크기 기본적으로 가로크기 1024px 가운데 정렬을 하고 가로 크기가 작아지면 크기를 줄이고 768px 미만이 되면 꽉 채움
`;

const Button = styled.button`
background: white;
color: black;
border-radius: 4px;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border - box;
font-size: 1rem;
font-weight: 600;

    //&문자를 사용하여 Sass처럼 자기 자신 선택 가능
&:hover{
    background: rgba(255, 255, 255, 0.9)
}

${props =>
        props.inverted &&
        css`
    background: none;
    border: 2px solid white;
    color: white;
    
    &:hover{
        background: white;
        color: black;
    }
`};
& + button{
    margin-left: 1rem;
}
`;

const StyledComponent = () => (
    <Box color='black'>
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box >
)

export default StyledComponent