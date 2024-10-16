

export const fibonacci = (no)=>{

  let  fib = [0,1]

for(let i = 2; i<=no ; i++){

num = i-1 + i-2
fib.push(num)

}

return fib

}

fibonacci(8)