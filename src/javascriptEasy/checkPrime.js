export const checkPrime = (no)=>{

    if(no<2){
        return "not a prime no"
    }


    for(let i =2; i<= Math.sqrt(no); i++){

        if(no % i ===0){
            return "not a prime no"
        }

    }
    return "prime number "
}