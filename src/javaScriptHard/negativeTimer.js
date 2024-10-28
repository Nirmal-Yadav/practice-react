import React, { useEffect, useState } from 'react'

function negativeTimer() {

    const [timer, setTimer] = useState(0)

    
      useEffect(()=>{
    let timeInterval
        if(timer > 0){

          timeInterval = setInterval(()=>{

       setTimer(prev=> prev -1)
        },1000)
        }

        return  ()=>{
          clearInterval(timeInterval)
        }
        
      },[timer])
    
  return (
    <div>
      <input>{timer} </input>
    </div>
  )
}

export default negativeTimer



