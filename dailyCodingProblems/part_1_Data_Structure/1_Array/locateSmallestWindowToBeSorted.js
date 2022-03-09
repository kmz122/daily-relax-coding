/**
 * Given an array of integers that are out of order, determine the bounds of the smallest
window that must be sorted in order for the entire array to be sorted. For example,
given [ 3 , 7 , 5 , 6 , 9] , you should return ( 1 , 3 ) .
 */

// Method 1
let array_to_sort = [1, 7, 6, 5, 9];
let window = arr => {
    let leftIndex, rightIndex; // undefined 

    let sortedArr = [...arr].sort((a, b) => a - b); // [1, 5, 6, 7, 9]

    for (let i = 0; i < sortedArr.length; i++) {
        if (arr[i] != sortedArr[i] && leftIndex === undefined) leftIndex = i;
        else if (arr[i] != sortedArr[i]) rightIndex = i;
    }
    console.log(`Smallest window size to be sorted = (${leftIndex}, ${rightIndex})`);
}
window(array_to_sort);
