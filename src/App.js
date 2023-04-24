import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <div className="app">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/contact" element={<Contact />} /> 
            </Routes>
            <Footer />
        </Router>
        </div>

     );
}
 
export default App;