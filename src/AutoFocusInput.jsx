import React, { useEffect ,useRef} from 'react'

const AutoFocusInput = () => {
    let id=useRef()

    const handle=()=>{
        console.log(id.current.value);
    }
    useEffect(()=>{
        id.current.focus()
    },[])
  return (
    <div>
        <input type="text" ref={id} />
        <button onClick={handle}>submit</button>
    </div>
  )
}

export default AutoFocusInput