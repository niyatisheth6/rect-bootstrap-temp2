import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import Context from "./components/Context";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Clients />
      <Context />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
