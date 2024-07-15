import React, { useRef, useState } from 'react'

const InputValueDisplay = () => {
    const InputRef=useRef(null)
    let [input,setinput]=useState('')

    const handlechange=()=>{
      setinput(InputRef.current.value )
    }
  return (
    <div>
      
        <h1>{InputValueDisplay}</h1>
        <input type="text"  value={InputRef}  onChange ={handlechange}placeholder='type something......' />
        <p>Input Value: {input}</p><hr></hr>

    </div>
  )
}

export default InputValueDisplay