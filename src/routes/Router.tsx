import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../page/About";
import Home from "../page/home/Index";
import Navbar from "../page/navbar/Navbar";
import LoveCompassionSection from "../page/hero/LoveCompassionSection";
import Frontend from "../page/core/frontdend/Frontend";
import FrontendContents from "../page/core/frontdend/Contents";
import VersionContents from "../page/core/versionControl/Contents";
import VersionControl from "../page/core/versionControl/VersionControl";


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
                    <Route path="/frontendContents" element={<FrontendContents />}></Route>
                    <Route path="/versionTools" element={<VersionControl />}></Route>
                    <Route path="/versionContents" element={<VersionContents />}></Route>

                </Routes>

            </div>
            {/* <Footer /> */}
        </Router>
    )
}

export default AppRouter