
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
    <main>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Sample/>
      <Footer />
    </main>
  );
}

export default App;
