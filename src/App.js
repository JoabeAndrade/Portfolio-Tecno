import React from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Card from "./components/card";

function App(){
  return(
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;