/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

// const numsA1 = [0, 1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7, 8, 9, 9, 9, 10, 11, 12, 13, 14, 14, 14, 15, 16, 16, 17, 18, 18, 18, 19, 21, 22, 23, 24, 25,26];
// const expected1 = [2, 7];

// const numsA2 = [0, 1, 2, 2, 2, 7];
// const numsB2 = [2, 2];
// const expected2 = [2];

// const numsA3 = [0, 1, 2, 2, 2, 7];
// const numsB3 = [10];
// const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

let testArray1 = [1, 2, 3, 4, 5, 6, 7]
let testArray = []
for (let k = 0; k < 500000; k++){
    testArray.push(k)
}

// function orderedIntersection(sortedA, sortedB) {
//     let newArray = []
//     for (let i = 0; i < sortedA.length; i++){
//         for (let j = 0; j < sortedB.length; j++){
//             if (sortedA[i] === sortedB[j]){
//                 if (!newArray.includes(sortedA[i])){
//                     newArray.push(sortedA[i])
//                 }
//             } else if(sortedB[j] > sortedA[i]) {
//                 break
//             }
//         }
//     }
//     return newArray;
// }


function orderedIntersection(sortedA, sortedB) {
    let newArray = []
    for (let i = 0; i < sortedA.length; i++){
        for (let j = 0; j < sortedB.length; j++){

            if (sortedA[i] !== sortedB[j]){
                if (!newArray.includes(sortedA[i])){
                newArray.push(sortedA[i])
                }
            }
        }
    }
    return newArray;
}

function orderedMultisetUnion(sortedA, sortedB) {
    let maxCount = 0;
    let count = 0;
    let lastNumber;
    for (let i = 0; i < sortedA.length; i++){
        let count = 0;
        for (let j = 0; j < sortedA.length; j++){
            if (sortedA[i] === sortedA[j]){
                count++;
            }
        }
        if (count > maxCount) {
            maxcount = count;
            lastNumber = sortedA[i]
        }
    }
    return lastNumber
}
// function orderedIntersection(sortedA, sortedB) {
//     let newArray = []
//     for (let i = 0; i < sortedA.length; i++){
//         for (let j = 0; j < sortedB.length; j++){
//             sortedA[i] === sortedB[j] && !newArray.includes(sortedA[i]) ? newArray.push(sortedA[i]): null
//         }
//     }
//     return newArray;
// }

// console.log(orderedIntersection(numsA1, testArray));
// console.log(orderedIntersection(numsA1, numsB1));
// console.log(orderedIntersection(numsA2, numsB2));
// console.log(orderedIntersection(numsA3, numsB3));


const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];

console.log(orderedMultisetUnion(nums1A, nums1B))