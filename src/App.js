import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import React from 'react' ;


let name = "vishwajit vm" ;
function App() {
  //dark mode functionality here
  const [mode , setMode] = useState('light') ;

  //toggleMode
  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode("dark")
      document.body.style.background = '#042743'
    }
    else{
      setMode( "light")
      document.body.style.background = 'white'

    }
  }
  return (
    <>
    <Navbar title="Bloging Page" aboutTitle="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
    {/* <About /> */}
    <div className="container">
      <Textform heading="Enter Text To View Transform" mode={mode}></Textform>
    </div>
    </>
  );
}

export default App;
