import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact"
function App() {
  return (
    <div className="personal-app">
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>

    </div>
  );
}

export default App;
