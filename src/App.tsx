import { Route, Routes } from "react-router-dom";
import AnimateView from './3d/AnimateView';
import Projects from "./3d/Projects";

function App() {

  return (
    <Routes>
      <Route path="/" element={<AnimateView />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
