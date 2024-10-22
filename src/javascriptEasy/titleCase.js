function titleCase(str){

    const newStr = str.split('')

   return newStr.reduce((acc, curr)=>{
     const title =   curr.charAt(0).toUpperCase() + curr.slice()

     acc.push(title)
     return acc
    },[])

}