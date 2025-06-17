import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Index"


const AppRouter = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
