import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
