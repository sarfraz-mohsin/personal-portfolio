import React from "react"; //, { useState }
import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contacts/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import Qualification from "./Components/qualification/Qualification";
import ScrollUp from "./Components/scrollUp/ScrollUp";
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
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
