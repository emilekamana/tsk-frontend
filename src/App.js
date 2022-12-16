import logo from './logo.svg';
import './App.css';
import { categories } from './data/categories';
import Categories from './components/Categories';
import Body from './components/sections/Body';
import Navbar from './components/layout/Navbar';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Signup from './components/Signup';
import Sign from './pages/Sign';
import Login from './pages/Login';
function App() {

 
  return (
   <>
  <Router>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/body" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />


      </Routes>
    </Router>



 
   </>
  );
}

export default App;
