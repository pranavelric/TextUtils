import React, {useState} from 'react'


export default function Textform(props) {
  
  const handleCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
  }

  const [text,setText] = useState('Enter text here')
  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#212529':'white', color:props.mode==='light'?'#212529':'white'}} value={text} onChange={(event)=>setText(event.target.value)}></textarea>
        <button className="btn btn-primary mx-3 my-3" onClick={()=>setText(text.toUpperCase())}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={()=>setText(text.toLowerCase())}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-3 my-3" onClick={()=>setText(text.split(/[ ]+/).join(" "))}>Remove extra spaces</button>
    
      </div>
      <div className="mb-3">

      <h1>Your text summary</h1>
      <h6>{text.trim().split(/\s+/).length} words and {text.length} characters</h6>
      <h6>{text.trim().split(/\s+/).length * 0.008} Minutes to read on average</h6>

      </div>

</>
  )
}
