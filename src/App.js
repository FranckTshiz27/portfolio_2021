import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Competence from "./components/Competence";
import Apropos from "./components/Apropos";
import Realisation from "./components/Realisation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Menu />
      <Banner />
      <Apropos />
      <Competence />
      <Realisation />
      <Contact />
    </Router>
  );
}

export default App;
