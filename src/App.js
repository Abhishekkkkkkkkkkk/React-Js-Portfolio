import Navbar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/main";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Certificate from "./Components/Certificate/Certificate";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Service />
      <About />
      <Portfolio />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
