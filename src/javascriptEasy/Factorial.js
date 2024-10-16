import React from 'react'

function Factorial() {

 const factorial = (no)=>{

    let fact = 1

    for(let i =2; i <=no; i++){

        fact = i*fact

    }
    return fact
 }

 factorial(5)
  return (
    <div>
      
    </div>
  )
}

export default Factorial
