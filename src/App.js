
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setDarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setDarkMode('dark')
    document.body.style.backgroundColor ='#343a40'
    document.body.style.color ='#ffffff'
    showAlert("Darkmode enabled","success")

  }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor ='white'
      document.body.style.color ='#000000'
      showAlert("Darkmode disabled","success")

    }
  }
  return (
   <>
   <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Alert alert={alert}/>
      </div>  

      <Switch>
        <Route path="/about">
          <About  mode={mode} toggleMode={toggleMode}/>
        </Route>
        <Route path="/">
          <div className="container my-3">
            <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </div>
        </Route>
      </Switch>

    </Router>
   </>
  );
}

export default App;


