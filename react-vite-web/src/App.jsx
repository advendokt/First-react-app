import Header from "./components/Header";
import Footer from "./components/footer" // Ensure this matches the actual file name
import Banner from "./components/Banner";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './components/Header.css';
import './components/Footer.css';
import './components/Banner.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
      
    </>
  );
}

export default App;
