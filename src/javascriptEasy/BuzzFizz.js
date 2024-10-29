import React from 'react'

function BuzzFizz() {

    const fizz = ()=>{

        for(let i = 0; i <= 100 ; i++){

            if(i%3 === 0){
                console.log("fizz",i)
            }
            else if(i % 5 === 0){
                console.log("buzz", i)
            }else{
                console.log(i)
            }
        }

    }
    fizz()
  return (
    <div>
      
    </div>
  )
}

export default BuzzFizz
