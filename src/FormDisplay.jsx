import React, { useState } from 'react'

const FormDisplay = () => {
    // let id=useRef()
    let [input,setinput]=useState({
        
    })
     return (
    <>
        <form >
            <label htmlFor="">email  : </label>
            <input type="text"  placeholder='enter your email'/><br /><br />
            
        </form>       
    </>
  )
}

export default FormDisplay