export const vowels=(str)=>{

    let newStr = str.split('')

    const vowel = ["a",'e','i','o','u']

    return newStr.reduce((acc, curr)=>{

if(vowel.includes(curr)){
    acc++
}
return acc
        
    },0)


}