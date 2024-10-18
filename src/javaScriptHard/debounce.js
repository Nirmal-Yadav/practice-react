import React, { useState } from 'react'

function Debounce() {

    const [input, setInput] = useState("")

const debounceFunction = (value)=>{
    console.log(value)
}
   
  const  handleChange = (fn,time)=>{

    let timeOutId

     return (e)=>{

        clearTimeout(timeOutId)
        let newValue = e.target.value

        setInput(newValue)
      timeOutId =  setTimeout(()=>{

       fn(newValue) 
  
},time)
     }

    }

    const debounceInput = handleChange(debounceFunction,time)

  return (
    <div>
      <input onChange={debounceInput} />
    </div>
  )
}

export default Debounce
