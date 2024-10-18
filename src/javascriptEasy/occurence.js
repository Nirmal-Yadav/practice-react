const occurence = (str)=>{

    const occ = {}

    for(let i = 0; i < str.length; i++){

        if(occ[str[i]]){
            occ[str[i]] = occ[str[i]] +1
        }
        else{
            occ[str[i]] =1
        }

    }

    return occ
}

occurence("hello")