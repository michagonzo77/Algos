/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // let leftCount = 0;
    // let rightCount = 0;
    // let leftIdx = 0;
    // let rightIdx = nums.length
    // while (leftIdx + 1 !== rightIdx - 1) {
    //     if (nums[1] + nums[2] == 0){
    //         return 0
    //     }
    //     for (leftIdx = 0; leftIdx < nums.length; leftIdx++) {
    //         leftCount += nums[leftIdx]
    //         for (j = rightIdx - 1; j > 0; j--) {
    //             if (leftCount === rightCount && leftIdx + 1 === rightIdx - 1) {
    //                 return (leftIdx + 1)
    //             } else {
    //                 rightCount += nums[j]
    //                 rightIdx--
    //                 break
    //             }
    //         }
    //     }
    //     return -1
    // }
    let sum = 0;
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    for (let i = 0; i < nums.length; i++){
        if (leftSum == sum - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }
    return -1
};

let nums = [1, 7, 3, 6, 5, 6]
let nums2 = [1,2,3]
let nums3 = [2,1,-1]
console.log(pivotIndex(nums))
console.log(pivotIndex(nums2))
console.log(pivotIndex(nums3))