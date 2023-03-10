import React, { useState } from 'react';
import Navbar from "./Components/Navbar"
import Textarea from "./Components/Textarea";

// import About from "./Components/About";


function App() {

  const [mode,setMode]=useState('light');

const toggleMode =()=>{
  if(mode==='light'){
    setMode('dark')
  }else{
    setMode('light')
  }
}
  return (
    <div className="App">
      < Navbar title="Titly" mode={mode} toggleMode={toggleMode}/>
      <Textarea heading= "Text Modification App"></Textarea>

    

  {/* <About about="Accordian"></About>*/}

    </div>
  );
}

export default App;
