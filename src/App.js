
import './App.css';
import Navbar from './components/Navbar';
import FormArea from './components/FormArea';
import { useState } from 'react';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import About from './components/About';
function App() {
  const [mode, setmode] = useState('light')
  let toggleMode = () => {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#0A0E2C'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <div className="container">
          

 <Routes>
   <Route path='/' element={<FormArea heading="FormArea" mode={mode}/>}/>
   <Route path='/about' element={<About toggleMode={toggleMode} mode={mode}/>}/>
 </Routes>
   
 
 </div>
 </>
    
  );
}

export default App;
