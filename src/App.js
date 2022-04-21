import './App.css';
// Components
import NavBar from './Components/Navbar/Navbar.js';
import Introduction from './Components/Introduction/Introduction.js';
import About from './Components/About/About.js'
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <About />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
