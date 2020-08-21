/**
 * 
 * @param {*} position 
 * @description get the value of index in fibonacci sequence
 */
function getFib(position) {
    if (position === 0 || position === 1)
        return position
    let first = 0, second = 1, next = first + second;

    for (let i = 2; i < position; i++) {
        first = second;
        second = next;
        next = first + second;
    }
    return next;
}

// let fib = getFib(3);
// console.log(fib);

// my solution
function getFibRecursive(position, first = 0, second = 1, counter = 2) {
    if (position === 0 || position === 1)
        return position
    let next = first + second;
    if (counter >= position) {
        return next
    }
    return getFibRecursive(position, second, next, ++counter)
}

// let fib2 = getFibRecursive(9);
// console.log(fib2);

function getFib2(position) {
    if (position === 0 || position === 1)
        return position
    return getFib2(position - 1) + getFib2(position - 2)
}
console.log(getFib2(4))
console.log(getFib2(9))
console.log(getFib2(11))
console.log(getFib2(0))