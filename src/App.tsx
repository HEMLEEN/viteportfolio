import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/HomeBanner.css'
import "./styles/Navbar.css";
import "./styles/ProjectCard.css"
import "./styles/AboutMe.css"
import "./styles/Footer.css"
import "./styles/SkillCard.css"
import "./styles/Contact.css"
import './styles/Achievement.css';

import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>

  )
}

export default App