'use strict'
/**
 * 
 * @param {*} key 
 * @param {Array} arr
 * @description 
 * hold first as low, last as high & middle indexes for specific array
 * if key equals middle --> return it
 * if key < middle item in the array --> shift high index to middle - 1 to go to the left half of the array
 * if key > middle item in the array --> shift low index to middle + 1 to go to the right half of the array
 */
function binarySearch(key, arr) {

    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (key === arr[mid]) {
            return mid
        } else {

            if (key < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return -1;
}

function binarySearchRecursive(key, arr, low = 0, high) {

    if (high === undefined) {
        high = arr.length - 1
    }
    if (low <= high) {// base condition could be similar to while loop condition! but not always

        let mid = Math.floor((low + high) / 2)
        // If the element is present at the middle 
        if (key === arr[mid]) {
            return mid
        }
        // If element is smaller than mid, then 
        // it can only be present in left subarray 
        if (key < arr[mid]) {
            return binarySearchRecursive(key, arr, low, mid - 1)
        }
        // Else the element can only be present 
        // in right subarray 
        return binarySearchRecursive(key, arr, mid + 1, high)
    } else {
        return -1;
    }
}

let test_list = [1, 3, 9, 11, 15, 19, 29]
let test_val1 = 25
let test_val2 = 15
let test_val3 = 0

//console.log(binarySearch(test_val1, test_list))
//console.log(binarySearch(test_val2, test_list))
//console.log('==================================')
// console.log(binarySearchRecursive(test_val1, test_list))
// console.log(binarySearchRecursive(test_val2, test_list))
console.log(binarySearchRecursive(test_val3, test_list))