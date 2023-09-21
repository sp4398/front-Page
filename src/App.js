import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";



const App =()=> {
  const bgStyle={
    height:'100vh',
    width:'100vw',
    background:'linear-gradient(130deg, #FDD128 50%, white 50%)',
    margin:'0px',
    padding:'0px',
  };

  return (
    <div className="bg" style={bgStyle}>
     
       <Navbar/>
      <Home/>
    </div>
  );

  };
export default App;
