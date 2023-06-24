// import { React, useState } from 'react';
// import Info from './Info';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}>
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// }

// export default App

import React from 'react'
import Counter from './Counter'
import Infoclass from './Infoclass'

const App = () => {
  return (
    <Infoclass />
  )
}

export default App