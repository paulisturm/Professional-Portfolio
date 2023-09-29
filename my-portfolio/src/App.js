import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />

          
          
       </Routes>
    </>
  );
}

export default App;