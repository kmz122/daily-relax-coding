/*
Given an array of integers, return a new array such that each element at index i of
the new array is the product of all the numbers in the original array except the one
at i.
For example, if our input was [ 1, 2, 3, 4, 5], the expected output would be [ 120,
60, 40, 30, 24]. Ifourinputwas [3, 2, 1],theexpectedoutputwouldbe [2,
3, 6].
*/

// Using division
let orgArr = [1, 2, 3, 4, 5];
let total = orgArr.reduce((a, b) => a*b, 1);
// console.log(`total => ${total}`);
let modifiedArr = [...orgArr].map(x => total / x);
console.log("Original Array => ", orgArr);
console.log("Output Array using Division => ", modifiedArr)


// Follow-up: What if you can't use division?
function products(orgArr) {
    let prefix_products = [...orgArr];
    let suffix_products = [...orgArr].reverse();
    // let updatedArr = new Array(orgArr.length).fill(1);
    let updatedArr = [];
    
    // console.log(`prefix_products => ${prefix_products}`);
    // console.log(`suffix_products => ${suffix_products}`);
    for (let i = 0; i < orgArr.length; i++) {
        let suffix_count = orgArr.length - (i + 1);
        
        updatedArr.push([...prefix_products.slice(0, i), ...suffix_products.slice(0, suffix_count)].reduce((a, b) => a * b));
    }
    return updatedArr;
}
console.log("Output Array without using Division => ", products(orgArr))
