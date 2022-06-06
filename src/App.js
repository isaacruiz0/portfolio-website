import './App.css';
import { useEffect } from 'react';
// Components
import NavBar from './Components/Navbar/Navbar.js';
import Introduction from './Components/Introduction/Introduction.js';
import About from './Components/About/About.js'
import Skills from './Components/Skills/Skills.jsx'
import Project1 from './Components/Project1/Projects';
import Project2 from './Components/Project2/Projects'
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <About />
      <Skills />
      <Project1 />
      <Project2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
