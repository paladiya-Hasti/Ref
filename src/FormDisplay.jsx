import React, { useState } from 'react'

const FormDisplay = () => {
    // let id=useRef()
    let [input,setinput]=useState({
        
    })
     return (
    <>
<form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    
    </>
  )
}

export default FormDisplay