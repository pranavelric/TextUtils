
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';


function App() {
  const [mode, setDarkMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
    setDarkMode('dark')
    document.body.style.backgroundColor ='#343a40'
    document.body.style.color ='#ffffff'
    

  }
    else{
      setDarkMode('light')
      document.body.style.backgroundColor ='white'
      document.body.style.color ='#000000'
    
    }
  }
  return (
   <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  <Textform heading="Enter the text to analyze" mode={mode}/>
</div>
{/* <About/> */}
   </>
  );
}

export default App;
