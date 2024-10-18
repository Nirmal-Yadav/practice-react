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
  return (
    <div>
      <input>{timer} </input>
    </div>
  )
}

export default negativeTimer
