import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import React from 'react' ;
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  //toggleMode
  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode("dark")
      document.body.style.background = '#042743' ;
      showAlert("Dark Mode Has Been Enabled" , "success") ;
      document.title = "textUtils - Dark Mode Enabled" ;
      //change title with timeout
      // setTimeout(() => {
      //   document.title = "Vishwa is good coader" ;
      // }, 2000); // // ///
      // setTimeout(() => {
      //   document.title = "Vishwa is bad coader" ;
      // }, 1500);
    }
    else{
      setMode( "light")
      document.body.style.background = 'white'
      showAlert("Light Mode Has Been Enabled" , "success")
      document.title = "textUtils - Light Mode Enabled" ;
    }
  }
  return (
    <>
    <Navbar title="Bloging Page" aboutTitle="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />

    {/* <About /> */}
    <Router>
    <div className="container">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <Textform heading="Enter Text To View Transform" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
