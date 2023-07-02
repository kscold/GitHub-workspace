import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />  {/* 줄 긋는 태그 */}
      <TodosContainer />
    </div>
  );
};

export default App;