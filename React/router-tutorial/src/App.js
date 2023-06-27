import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  );
};

export default App;