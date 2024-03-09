import React, {useState} from 'react'

export default function TextForm( props ) {

    const [text, setText ] = useState('Enter text here...2!');

    const handleClearText = ()=>{
        let newText = "";
        console.log("Clear clicked...");
        setText(newText);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        console.log("Upper case clicked...");
        setText(newText);
    }

    const handleLwClick = ()=>{
        let newText = text.toLowerCase();
        console.log("Lower case clicked...");
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On change clicked....!")
        setText( event.target.value );
    }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLwClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear</button>
    </div>

    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
