const findMedianOf2Arrays = (arr1, arr2) => {
    let combinedArrays = [...arr1, ...arr2]
    let size = combinedArrays.length;
    combinedArrays.sort()
    let dominator = size % 2 === 0 ? 2 : 1;
    let median;
    if (dominator === 2) {
        median = (combinedArrays[size / 2 - 1] + combinedArrays[size / 2]) / dominator
    } else {
        median = combinedArrays[ Math.floor(size / 2)] / dominator
    }
    return median;
}


let arr1 = [1, 5, 8, 9]
let arr2 = [2, 3, 7, 10]
let median = findMedianOf2Arrays(arr1, arr2);
console.log(median)
arr1 = [1, 2]
arr2 = [3, 4, 5]
median = findMedianOf2Arrays(arr1, arr2);
console.log(median)
arr1 = [1, 2, 3]
arr2 = [4, 5]
median = findMedianOf2Arrays(arr1, arr2);
console.log(median)