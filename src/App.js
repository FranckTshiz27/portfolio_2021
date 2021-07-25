import "./App.css";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Competence from "./components/Competence";
import Apropos from "./components/Apropos";
import Realisation from "./components/Realisation";
import Contact from "./components/Contact";
import "./style/apropos.scss";
import img from "./images/img1.jpg";
import { DiAptana } from "react-icons/di";

function App() {
  return (
    <div className="main">
      <Menu />
      <Banner />
      <Apropos />
      <Competence />
      <Realisation />
      <Contact />
    </div>
  );
}

export default App;
