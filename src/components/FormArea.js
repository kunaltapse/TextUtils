import React,{useState} from 'react'

export default function FormArea(props) {
    const HandleToUpper = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleToLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleToClear = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    let [text, setText] = useState("");
  return (
    <div>
        <div className="mb-3" >
  {/* <label for="myBox" className="form-label">{props.heading}</label> */}
  <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#6c757d':'white', color: props.mode==='light'?'black':'white' }} id="myBox" rows="9"></textarea>
  <button className="btn-primary btn my-3 mx-2" onClick={HandleToUpper}>Convert to upper</button>
  <button className="btn-primary btn my-3 mx-2" onClick={HandleToLower}>Convert to lower</button>
  <button className="btn-primary btn my-3 mx-2" onClick={HandleToClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}} >
            <h1>Form summary</h1>
            <p>The textarea has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>content is</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
