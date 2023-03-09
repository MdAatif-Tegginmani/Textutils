import React from 'react'

function Textarea() {
  return (
   <>
   <div className="container form-floating my-5">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  <button className='btn btn-dark my-3'>Convert to upper case</button>
  </div>
   </>
  )
}

export default Textarea