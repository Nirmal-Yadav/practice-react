const balancedParanthesis = (arr)=>{



    for(let i = 0; i< arr.length; i++){

        if(arr[i] === "{" || "[" || "<" || "(" ){
            if(arr[i+1] ==="}" || "]" || ">"|| ")" ){
                continue
            }
            else{
                return "not balanced"
            }
        }
       
        
    }

    return "balanced parentesis"

}