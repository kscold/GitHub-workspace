import Todos from './components/Todo';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />  {/* 줄 긋는 태그 */}
      <Todos />
    </div>
  );
};

export default App;