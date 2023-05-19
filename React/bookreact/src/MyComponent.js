import React from 'react';
import PropTypes from 'prop-types'; //컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때 사용(.defaultProps와 비슷)ㄷ3;

// const MyComponent = (props) => {//props를 넣어 다른 js에서 파라미터를 붙일 수 있게 만듬
//     const { name, children } = props //비구조화 할당을 사용 name = props.name, children = props.children
//     return <div>안녕하세요, 제 이름은 {name}입니다.<br />
//         children값은 {children}입니다.</div> //비구조화 할당을 사용했기 때문에
//     //.children은 정의되어 있는 파라미터를 사용하지 않아도 name과 children을 사용가능
// };

// MyComponent.defaultProps = {//기본 이름을 설정하기 위한 함수 .defaultProps를 사용
//     name: '기본 이름'
// }

const Mycomponent = ({ name, favoriteNumber, children }) => { //함수의 props란에도 비구조화 할당을 사용가능 대신 (props)가 아니라 ({props1, props2, ...})
    //propTypes 지정하지 않았을 때 경고 메시지를 띄우기 위해 isRequired의 필수 props인 favoriteNumber를 설정
    return (
        <div>안녕하세요, 제 이름은 {name}입니다.<br />
            children값은 {children}입니다.<br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};

Mycomponent.defaultProps = {
    name: '기본 이름'
};

Mycomponent.propTypes = {
    name: PropTypes.string, //prop-types를 불러온 PropTypes로, 이렇게 설정하면 무조건 문자열(string)형태로 전달해야됨
    favoriteNumber: PropTypes.number.isRequired //favoriteNumber를 설정 App.js에서 파라미터를 넘겨줘야됨
};

export default Mycomponent;


//만약 클래스형 컴포넌트에서 props를 사용한다면
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Mycomponent extends Component {
//     render() {
//         const {name, favoriteNumber, children} =this.props; //비구조화 할당
//         return (
//             <div>안녕하세요, 제 이름은 {name}입니다.<br />
//             children값은 {children}입니다.<br />
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         );
//     }
// }

// Mycomponent.defaultProps = {
//     name: '기본 이름'
// };

// Mycomponent.propTypes = {
//     name: PropTypes.string, 
//     favoriteNumber: PropTypes.number.isRequired 
// };

// export default Mycomponent;
//이렇게 사용하면 됨

//클래스형 컴포넌트에서 defaultTypes와 propTypes를 설정할 때, class 내부에서 지정하는 방법도 있음

// import React, { Component } from 'react';

// class Mycomponent extends Component {
//     static defaultProps = { //static을 사용하여 바로 propTypes을 지정
//         name: "기본 이름"
//     }
//     static propTypes = {
//         name: PropTypes.string,
//         favoriteNumber: PropTypes.number.isRequired
//     }
//     render() {
//         const { name, favoriteNumber, isRequired } = this.props
//         return (
//             <div>안녕하세요, 제 이름은 {name}입니다.<br />
// //             children값은 {children}입니다.<br />
// //             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         );
//     }
// }

// export default Mycomponent;