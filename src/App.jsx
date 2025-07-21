import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Project from "./sections/Project.jsx";

function App() {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Education />
            <Project />
            <Contact />
            <Dock />
            <Tooltip />
        </>
    );
}

export default App