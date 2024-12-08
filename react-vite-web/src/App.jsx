import Header from "./components/Header";
import Footer from "./components/footer" // Ensure this matches the actual file name
import Banner from "./components/Banner";
import Features from "./components/Features";
import About from "./components/About"
import Service from "./components/Service"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"




import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'aos/dist/aos.css';
import 'aos/dist/aos.js';



import './components/Header.css';
import './components/Footer.css';
import './components/Banner.css';
import './App.css';
import { ImOffice } from "react-icons/im";



function App() {

  return (
    <>
      <div>
        <Header />
        <Banner />
        <Features />
        <About />
        <Service />
        <Gallery />
        <Contact />


        <Footer />
      </div>

    </>
  );
}

export default App;
