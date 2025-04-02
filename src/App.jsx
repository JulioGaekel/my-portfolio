import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"

function App() {
    return (
        <Router>
            <div className="w-screen min-h-screen flex flex-col bg-gray-100 text-gray-900">
                <Navbar />
                <div className="bg-yellow-200 text-yellow-900 text-center py-2 px-4 text-sm font-medium">
  🚧 This portfolio is a work in progress! New content and features coming soon.
</div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
