
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return <div classsName="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/menu"  element={<Menu />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
  </div>;
}

export default App;
