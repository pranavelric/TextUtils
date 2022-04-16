import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
   <>
<Navbar title="TextUtils"/>
<div className="container my-3">
  <Textform heading="Enter the text to analyze"/>
</div>
{/* <About/> */}
   </>
  );
}

export default App;
