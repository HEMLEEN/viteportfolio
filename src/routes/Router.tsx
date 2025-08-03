import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../page/About";
import Home from "../page/home/Index";
import Navbar from "../page/navbar/Navbar";
import LoveCompassionSection from "../page/hero/LoveCompassionSection";
import Frontend from "../page/core/frontdend/Frontend";
import FrontendContents from "../page/core/frontdend/Contents";


const AppRouter = () => {

    return (
        <Router>
            <Navbar />
            <div className="section bg-light" id="section">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/lang" element={<LoveCompassionSection />}></Route>

                    {/* langugaes */}
                    <Route path="/frontend" element={<Frontend />}></Route>
                    <Route path="/contents" element={<FrontendContents />}></Route>

                </Routes>

            </div>
            {/* <Footer /> */}
        </Router>
    )
}

export default AppRouter