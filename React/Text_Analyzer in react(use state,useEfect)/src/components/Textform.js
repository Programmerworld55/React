import React,{useState} from 'react';

export default function Textform(props) {
    const [text,setText]=useState("enter your text here")
    const [msg,setmsg]=useState("Hey Here")
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleUpperCase=()=>{
        setText(text.toUpperCase())
        setmsg("Text Conveted To UpperCase")
    }
    const handleLowerCase=()=>{
        setText(text.toLowerCase())
        setmsg("Text Conveted To LowerCase")
    }
    const handleCopyText=()=>{
        navigator.clipboard.writeText(text)
        setmsg("Text Copied To Clipboard")

    }
    const handleClearText=()=>{
        let new_text=""
        setText(new_text)
        setmsg("Field is clear")
    }
  return (
    <>
   <div className="container my-4 mx-auto" data-bs-theme={props.mode.modee}>
     <textarea name="" id="" cols="148" rows="3" onChange={handleOnChange} value={text}></textarea>
     <div className="card text-center">
  <div className="card-header">
    Analysis
  </div>
  <div className="card-body">
    <h5 className="card-title">Total Letters</h5>
    <h5 className="card-title">{text.length}</h5>
    <h5 className="card-title">Total words</h5>
    <h5 className="card-title">20 words</h5>
    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
    {/* <a href="none" className="btn btn-primary">Go somewhere</a> */}
  </div>
  {/* <div class="card-footer text-body-secondary">
    2 days ago
  </div> */}
</div>
     
</div>
<div className="container">
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{msg}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<button type="button" className="btn btn-dark m-2" onClick={handleUpperCase}>UpperCase</button>
<button type="button" className="btn btn-dark m-2" onClick={handleLowerCase}>LowerCase</button>
<button type="button" className="btn btn-dark m-2" onClick={handleCopyText}>Copy Text</button>
<button type="button" className="btn btn-dark m-2" onClick={handleClearText}>Clear Text</button>

</div>
</>

  )
}
