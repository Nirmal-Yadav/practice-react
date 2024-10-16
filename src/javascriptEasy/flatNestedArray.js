export const flatNestedArray = (arr)=>{

const flat = []
    for(let i =0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
           flat.push( ...flatNestedArray(arr[i]))
        }else{
            flat.push(arr[i])
        }

    }
    return flat

}