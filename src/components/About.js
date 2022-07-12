import React,{useState} from 'react'

 


export default function About(props) {
  //  const [mystyle, setmystyle] = useState({
    //    backgroundColor:'white',
   //     color:'black'
   // })

    let mystyle = {
       color: props.mode ==='dark'?'white':'black',
       backgroundColor: props.mode === 'dark'?'#0A0E2C':'white'
    }
   
  return (
    <>
    <div className="container my-2" style={mystyle}>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Analyze your texts </strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils gives you a way to analyse your text quickly and efficiently, be it word count or character count or the content.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       TextUtils is a free character  counter tool that provides instant character count and word count staistically for a given text.
       Textutils gives you a nuumber of word-count and character-count. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This word counter software works in any web browser such as Chrome, Firefox, Opera, Internet Explorer, Safari. It suits to count
        characters in Facebook, books, excel documents, pdf document, essays etc 
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}
