import React,{useState} from 'react';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Colors from './components/Colors';

export default function App() {
  const [mode,setmode]=useState({
    modee:"light",
        msg:"Light mode"
  });
  const togglefunction=()=>{
    if(mode.modee==="dark")
    {
      setmode({
        modee:"light",
        msg:"Light mode"
      })
      console.log("mode is ",mode.modee)
      console.log("msg is ",mode.msg)
    }
    else{
      setmode({
        modee:"dark",
        msg:"Dark mode"
      })
    }
  }
  // const changebg=()=>{
  //   setmode({
  //     modee:"dark",
  //     msg:"primary mode"
  //   })
  // }
  return (
    <div>
      <Navbar mode={mode} togglefunctionn={togglefunction}></Navbar>
      <Colors></Colors>
      <Textform mode={mode}></Textform>
     
    </div>
  )
  
  
}
