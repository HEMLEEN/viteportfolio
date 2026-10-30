import { Route, Routes } from "react-router-dom";
import AnimateView from './3d/AnimateView';

function App() {

  return (
    <Routes>
      <Route path="/" element={<AnimateView />} />
    </Routes>
  )
}

export default App
