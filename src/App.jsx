import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routers for every pages
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Sample from "../pages/Sample";

// Routers for every Componenets
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Routes>
        {/* <Route path="/" exact element={<Home />} />
        <Route path="/abouts" exact element={<About />} /> */}
        {/* <Route path="/services" exact element={<Services />} /> */}
        <Route path="/projects" exact element={<Sample />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
