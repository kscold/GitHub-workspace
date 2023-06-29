// import React, { useState } from 'react';
// import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => { //async와 await를 사용하여 비동기적으로 확인 이 기능을 사용하여 비동기적으로 서버에 데이터를 가져오고 데이터를 보여줌
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=c77f5337872a4688a1ebd82fca07dc98',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e)
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={50} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   )
// }

const App = () => {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
};

export default App

