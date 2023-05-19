import React from 'react';

//import MyComponent from "./MyComponent";
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

const App = () => {
  return <EventPractice />
  //return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>//컴포넌트 태그 사이의 내용을 보여주는 props를 children이라고 함
  //props 지정할려면 name =""
  //현재 string타입으로 PropTypes를 지정해놓았으므로 {3}이면 오류
  //favoriteNumber를 PropTypes.number.isRequired로 지정해놓았기 때문에 파라미터가 없으면 오류 메시지를 띄움
};

export default App;