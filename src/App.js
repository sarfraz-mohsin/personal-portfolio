import React from "react"; //, { useState }
import "./App.css";
import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import Qualification from "./Components/qualification/Qualification";
import Services from "./Components/services/Services";
import Skills from "./Components/skills/Skills";
import Testimonials from "./Components/testimonials/Testimonials";

const App = () => {
  //const [mode, setMode] = useState(true);
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
      </main>
    </>
  );
};

export default App;
