import React from 'react'

function Palindrome() {

     const palindromeString = (string)=>{
      const newString = string.split('')

      let curr = ""

      for(let i = newString.length-1; i>=0; i--){

        curr = newString[i]+curr

      }
      console.log(curr)

     }

     palindromeString("maam")

  return (
    <div>
      
    </div>
  )
}

export default Palindrome
