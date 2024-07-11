import { useState } from 'react'
import FormDisplay from './FormDisplay'
import AutoFocusInput from './AutoFocusInput'


const App=()=>   {
  const [count, setCount] = useState(0)

  return (

  <div >
    <AutoFocusInput/>
    <FormDisplay/>
  </div>
  )
}

export default App
