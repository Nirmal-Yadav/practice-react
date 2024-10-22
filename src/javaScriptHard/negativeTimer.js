import React, { useEffect, useState } from 'react'

function negativeTimer() {

    const [timer, setTimer] = useState(0)

    const negative = (time)=>{
setTimer(time)
setInterval(()=>{
setTimer((timer)=> timer-1 )
})
    }

    useEffect(()=>{
negative(5)
    },[timer])

    {
      useEffect(()=>{
    
        if(timer > 0){

     const timeInterval =     setInterval(()=>{

          setTimer(prev=> prev -1)
        },1000)
        }

        return  ()=>{
          clearInterval(timeInterval)
        }
        
      },[timer])
    }
  return (
    <div>
      <input>{timer} </input>
    </div>
  )
}

export default negativeTimer


