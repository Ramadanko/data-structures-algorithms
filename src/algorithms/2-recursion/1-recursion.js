/**
 * @description 
 * think of recursion as while loop with a base case.
 * it goes infinite without base case
 * @param {*} input 
 */
function recursive(input) {

    console.log(input);
    if (input <= 0)  // base case
        return input
    else {
        let output = recursive(input - 1)
        return output
    }
}

//console.log(recursive(2))

// print from start to end using recursion
function printToNumber(start, end) {

    if (start >= end) {
        console.log(end)
        return
    }
    console.log(start++)
    printToNumber(start, end)
}

printToNumber(0, 10)