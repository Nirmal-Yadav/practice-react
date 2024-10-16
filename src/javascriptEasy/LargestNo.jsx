import React from 'react'

function LargestNo() {

    

    const largest = (array)=>{

let num = 0
        for(let arr of array){
            if(arr > num){
                num = arr
            }
        }
        return num
    }

    largest([3,4,5,6,7,8])

  return (


    <div>
      
    </div>
  )
}

export default LargestNo
