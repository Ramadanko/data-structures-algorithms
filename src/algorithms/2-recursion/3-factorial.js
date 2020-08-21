function factorial(i) {
    if (i === 1) {
        return i
    }
    return i * factorial(i - 1)
}


let fact_3 = factorial(3);
console.log(fact_3)
let fact_4 = factorial(4);
console.log(fact_4)
let fact_5 = factorial(5);
console.log(fact_5)