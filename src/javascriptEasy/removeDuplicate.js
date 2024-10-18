export const removeDuplicate = (arr)=>{
 arr.reduce((acc, curr)=>{

    if(!acc.includes(curr)){
acc.push(curr)
    }else{
        return acc
    }
    return acc
},[])


    arr.filter((ele,i)=>indexOf(ele) === i)

}