import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/NavBar';
import Missons from './Pages/Missons';
import Profile from './Pages/Profile';
import Rockets from './Pages/Rockets';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="main">
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missons" element={<Missons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
