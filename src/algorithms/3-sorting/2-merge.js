const merge = (left, right) => {

    let results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    results = [...results, ...left, ...right]
    return results;
}

/**
 * @description Merge Sort: top to bottom implementation
 * @param {*} arr
 */
const mergeSort = (arr) => {
    if (arr.length < 2) { // base case
        return arr;
    }

    const length = arr.length
    const middle = Math.floor(length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, length)

    // being verbose is helpful for readability
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

let arr = [14, 12, 10, 8, 6, 4, 2, 0]
console.log(arr)
let sorted = mergeSort(arr)
console.log(sorted)