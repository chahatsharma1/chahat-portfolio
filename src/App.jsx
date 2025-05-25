import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Dock />
      <Tooltip />
    </>
  );
}

export default App