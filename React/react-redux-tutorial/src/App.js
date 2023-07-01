import Counter from './components/Counter';
import Todos from './components/Todo';

const App = () => {
  return (
    <div>
      <Counter number={0} />
      <hr />  {/* 줄 긋는 태그 */}
      <Todos />
    </div>
  );
};

export default App;