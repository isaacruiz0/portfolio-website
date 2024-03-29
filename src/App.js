import './App.css';
import { useEffect } from 'react';
// Components
import NavBar from './Components/Navbar/Navbar.js';
import NavbarMobile from './Components/Navbar/NavbarMobile';
import Introduction from './Components/Introduction/Introduction.js';
import About from './Components/About/About.js'
import Skills from './Components/Skills/Skills.jsx'
import Project1 from './Components/Project1/Project1';
import Project2 from './Components/Project2/Project2'
import Project3 from './Components/Project3/Project3'
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className="App">
      <NavBar />
      <NavbarMobile />
      <Introduction />
      <About />
      <Skills />
      <Project1 />
      <Project2 />
      <Project3 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
