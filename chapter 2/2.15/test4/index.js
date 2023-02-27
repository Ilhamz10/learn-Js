function pow(a, b){
    return a ** b
}

let x = +prompt('Number 1:')
let n = +prompt('Number 2:')

if(n < 0){
    alert(`Используйте натуральное число`);
}
else{
    alert(pow(x, n))
}