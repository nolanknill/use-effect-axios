import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home/Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tv-shows/:id" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;