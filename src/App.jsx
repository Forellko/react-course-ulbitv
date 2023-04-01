import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
