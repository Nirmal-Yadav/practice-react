import React from 'react'

function Throttle() {

    const [inputValue , setInputValue] = useState("")

    let throttleTimeout

    const throttleFunction = (value)=>{
        console.log('value', value)
    }

    const handleChange = (fn,time)=>{

        let temp = true

        return (e)=>{

          let  newValue = e.target.value
           
            if(temp){
                clearTimeout(throttleTimeout)
                fn(newValue) 
temp = false
            }

            throttleTimeout = setTimeout(()=>{
                temp=true
            },time)
        }
    }

    const throttleChange= handleChange(throttleFunction, 500)
  return (
    <div>
      <input onChange={throttleChange}/>
    </div>
  )
}

export default Throttle


