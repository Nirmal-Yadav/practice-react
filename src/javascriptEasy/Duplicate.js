import React from 'react'

function Duplicate() {

    const duplicateArray = (arr)=>{

   return     arr.reduce((acc,curr,array)=>{

            if(!acc.includes(curr)){
                acc.push(curr)
            }
           
            return acc
        
        },[])

    }

    duplicateArray([1,2,3,1,4,2,5,3])
  return (
    <div>
      
    </div>
  )
}

export default Duplicate
