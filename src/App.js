import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import AboutMe from './Component/AboutMe/AboutMe';
import Navbar from './Component/Navbar/Navbar';
import ContactMe from './Component/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
