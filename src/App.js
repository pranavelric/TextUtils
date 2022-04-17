
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


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
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container">
<Alert alert={alert}/>
</div>
<div className="container my-3">
  <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
</div>
{/* <About/> */}
   </>
  );
}

export default App;
