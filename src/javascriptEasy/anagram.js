export const checkAnagram = (str1, str2)=>{

    let newStr1 = str1.split('')
    let newStr2 = str2.split('')

  const checkStr1 =  newStr1.sort((a,b)=> a-b).join('')
  const checkStr2 = newStr2.sort((a,b)=>a-b).join("")

  if(checkStr1 === checkStr2){
    return "str1 and str2 are anagram"
  }else{
    return "not an anagram"
  }
    
}