import React from 'react'

function ArraySum() {

    const sum = (arr)=>{

    return    arr.reduce((acc, curr)=>{
 acc = curr + acc
 return acc
        },0)
    }

    sum([10,40,49,34,76])

  return (
    <div>
      
    </div>
  )
}

export default ArraySum
