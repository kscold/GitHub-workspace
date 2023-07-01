// import React, { useState } from 'react';
// import axios from 'axios';


// import { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

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

// const App = () => {
//   const [category, setCategoey] = useState('all'); //기본 선택은 전체보기로 설정
//   const onSelect = useCallback(category => setCategoey(category), []); //onSelect로 카테고리를 선택 시 그 카테고리로 category를 업데이트

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };

// export default App

import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => { //경로에 category URL 파라미터가 없어도 NewPage 컴포넌트를 보여줘야 하고, category가 있어도 NewsPage를 보여줘야 하기 때문에
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  )
}

export default App;