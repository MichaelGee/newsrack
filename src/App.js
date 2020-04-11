import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Banner from "./components/banner";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Cards />
    </div>
  );
}

export default App;
