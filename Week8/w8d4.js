// /* 
//   Given an array of ints, find all the non-consecutive integers
//   A number is non-consecutive number if it is NOT exactly 1 larger than the previous element
//   in the scope of this algo.
//   The first element is never considered non-consecutive.
//   Return an array of objects where each object contains the number itself
//   and it's index.
// */

// const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
// const expected1 = [
//     { i: 4, n: 6 },
//     { i: 7, n: 10 },
// ];

// const nums2 = [];
// const expected2 = [];

// const nums3 = [1, 3, 7, 9];
// const expected3 = [
//     { i: 1, n: 3 },
//     { i: 2, n: 7 },
//     { i: 3, n: 9 },
// ];
// // Explanation: Index 0 has no number before it, so it is not included.

// /**
//  * Finds all the non-consecutive (out of order) numbers from the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} sortedNums
//  * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
//  * @property {number} i The index of the non consecutive number.
//  * @property {number} n The non consecutive number itself.
//  * @returns {NonConsecNums}
//  */
// function allNonConsecutive(sortedNums) {
//     let nonCon = []
//     for (let i = 1; i < sortedNums.length; i++) {
//         if (sortedNums[i] !== sortedNums[i - 1] + 1) {
//             nonCon.push({
//                 idx: i,
//                 num: sortedNums[i]
//             })
//         }
//     }
//     return nonCon;
// }

// console.log(allNonConsecutive(nums1));
// console.log(allNonConsecutive(nums2));
// console.log(allNonConsecutive(nums3));

// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
    const outerArr = [];
    for (let ii = 0; ii < nums.length; ii++) {
        let sum = nums[ii];
        let innerArr = [nums[ii]];
        for (let jj = ii+1; jj < nums.length; jj++) {
            sum += nums[jj];
            if (sum <= targetSum) {
                innerArr.push(nums[jj])
            }
            if (sum > targetSum){
                innerArr = []
                break
            }
            if (sum == targetSum){
                outerArr.push(innerArr);
                innerArr = []
                break
            }
        }
    }
    return outerArr;
}

console.log(findConsqSums(nums1, sum1));
console.log(findConsqSums(nums2, sum2));
console.log(findConsqSums(nums3, sum3));
console.log(findConsqSums(nums4, sum4));
console.log(findConsqSums(nums5, sum5));