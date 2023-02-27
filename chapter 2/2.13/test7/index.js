let n = 10

primeNum:for(let i = 2; i <= n; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            continue primeNum
        }
    }
    console.log(i)
}