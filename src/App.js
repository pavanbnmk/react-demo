import { StrictMode } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App(){
  
  return(
  <StrictMode>
    <Navbar title='Text Utils' aboutText='About Us' />
    {/* <TextForm heading="Enter the text to analyze." /> */}
    <About />
  </StrictMode>

  );
}

export default App;