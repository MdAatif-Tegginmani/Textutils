import React,{useState} from 'react'


function Textarea(props) {

    const handleUppercase =()=>{
      let newText = text.toUpperCase() ;
      setText(newText);
        
    }


    const handleLowercase=()=>{
      const newText2 = text.toLowerCase();
      setText(newText2)
    }

    const handleClearClick =()=>{
      let newText3 ="" ;
      setText(newText3)
    }

    const handleCopyText=()=>{
      let text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value) ;

    }

    const handleSpaces=()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }

    const handleFonts=()=>{
      let newtext = document.getElementById('myBox') ;
      newtext.style.fontFamily="Cursive"
    }















    const handleOnChange=(event)=>{
      setText(event.target.value) ;

    }





    const[text,setText]=useState("")



  return (
   <>
   <div className="container form-floating my-5">
   <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="myBox"  ></textarea>
  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleUppercase} >Convert to upper case</button>

  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleLowercase} >Convert to lower case</button>
  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleClearClick} >Clear Text</button>
  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleCopyText} >Copy Text</button>
  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleSpaces} >Remove spaces</button>
  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleFonts} >Change Fonts</button>





  </div>
  <div className="container my-2">
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
  </div>
   </>
  )
}

export default Textarea