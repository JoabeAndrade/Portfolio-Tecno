import React from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Services from "./pages/Services";
import Works from "./pages/Works";

function App(){
  return(
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Works/>
    </div>
  );
}

export default App;