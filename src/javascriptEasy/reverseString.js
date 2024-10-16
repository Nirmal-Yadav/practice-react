import React from "react"


function ReverseString(){

   const reverse = (string)=>{

    const newString = string.split('')
    console.log(newString)

 return   newString.reduce((acc,curr)=>{

        acc = curr+acc
        return acc

    },'')

   }

   console.log(reverse("nirmal"))

    return (
        <div>

        </div>
    )
}

export default ReverseString