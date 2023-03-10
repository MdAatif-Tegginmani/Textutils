import React,{useState} from 'react'


function Textarea(props) {

    const handleUppercase =()=>{
      const newText = text.toUpperCase() ;
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
















    const handleOnChange=(event)=>{
      setText(event.target.value) ;

    }





    const[text,setText]=useState("")



  return (
   <>
   <div className="container form-floating my-5">
   <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea2"  ></textarea>
  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleUppercase} >Convert to upper case</button>

  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleLowercase} >Convert to lower case</button>
  <button className='btn btn-dark my-3 mx-1'type='button' onClick={handleClearClick} >Clear Text</button>
 




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