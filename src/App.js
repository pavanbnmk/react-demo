import { StrictMode } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App(){
  
  return(
  <StrictMode>
    <Navbar title='Text Utils' aboutText='About Us' />
    <TextForm heading="Enter the text to analyze." />
  </StrictMode>

  );
}

export default App;