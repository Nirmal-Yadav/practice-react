export const search = (arr, ele)=>{

 
    let  right = arr.length-1
    let left = 0

    while(left <= right ){

        let mid = Math.floor((right+left)/2)

        if(arr[mid] === ele){
            return ele
        }
        if(arr[mid] > ele){
right= mid-1
        }

        if(arr[mid] < ele){
            left = mid +1
        }

    }

    return "not found "
}


   