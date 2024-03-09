import React, {useState} from 'react'

export default function TextForm( props ) {

    const [text, setText ] = useState('Enter text here...2!');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        console.log("Upper case clicked...");
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On change clicked....!")
        setText( event.target.value );
    }

  return (
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
