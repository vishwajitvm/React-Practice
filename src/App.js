import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import React from 'react' ;
import Alert from './components/Alert';


let name = "vishwajit vm" ;
function App() {
  //dark mode functionality here
  const [mode , setMode] = useState('light') ;
  const [alert , setAlert] = useState(null) ;

  const showAlert = (message ,type)=> {
    setAlert({
      msg: message,
      type: type,
    })
  }


  //toggleMode
  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode("dark")
      document.body.style.background = '#042743' ;
      showAlert("Dark Mode Has Been Enabled" , "success")
    }
    else{
      setMode( "light")
      document.body.style.background = 'white'
      showAlert("Light Mode Has Been Enabled" , "success")
    }
  }
  return (
    <>
    <Navbar title="Bloging Page" aboutTitle="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert} />

    {/* <About /> */}
    <div className="container">
      <Textform heading="Enter Text To View Transform" mode={mode}></Textform>
    </div>
    </>
  );
}

export default App;
