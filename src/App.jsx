import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
