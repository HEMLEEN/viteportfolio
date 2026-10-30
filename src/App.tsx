import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import AnimateView from './3d/AnimateView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<AnimateView />} />
    </Routes>
  )
}

export default App
