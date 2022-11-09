/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
// You will need more parameters!
function anagrams(inputString) {
    if (inputString.length === 0) return [[]];
    const stringArr = inputString;
    const firstEl = stringArr[0];
    const restArr = stringArr.slice(1);
    const anagramWithoutFirst = anagrams(restArr);
    const masterArr = [];

    anagramWithoutFirst.forEach(anagram => {
        for (let i = 0; i <= anagram.length; i++) {
            const anagramWithFirst = [...anagram.slice(0, i), firstEl, ...anagram.slice(i)]
            masterArr.push(anagramWithFirst)
        }
    })
    return masterArr
}

function splitAndUnsplit(f) {
    return (str) => (f(str.split('')).map(xs => xs.join('')))
}

// function splitAndUnsplit(f) {
//     return function (str) {
//         const inputArr = str.split('')
//         const outputArr = f(inputArr)
//         const outputStr = outputArr.map(xs => xs.join(''))
//         return outputStr
//     }
// }

console.log(splitAndUnsplit(anagrams)(str1))

// console.log(generateAnagrams(str1)) //["ilm", "iml", "lim", "lmi", "mil", "mli"] (order may vary, that's okay)



const str1 = "lim";

function anagrams(inputString) {
    if (inputString.length === 0) return [[]];
    const stringArr = inputString;
    const firstEl = stringArr[0];
    const restArr = stringArr.slice(1);
    const anagramWithoutFirst = anagrams(restArr);
    const masterArr = [];

    anagramWithoutFirst.forEach(anagram => {
        for (let i = 0; i <= anagram.length; i++) {
            const anagramWithFirst = [...anagram.slice(0, i), firstEl, ...anagram.slice(i)]
            masterArr.push(anagramWithFirst)
        }
    })
    return masterArr
}

function splitAndUnsplit(f) {
    return (str) => (f(str.split('')).map(xs => xs.join('')))
}

console.log(splitAndUnsplit(anagrams)(str1))


const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


function bubbleSort(nums) {
    let placehold = 0;
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < (nums.length - i - 1); j++) {
            if (nums[j] > nums[j + 1]) {
                placehold = nums[j];
                nums[j] = nums[j + 1]
                nums[j + 1] = placehold
            }
        }
    }
    return nums;
}

console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));




var nums = [1, 2, 1, 3, 4]


function solution(numbers) {
    emptyArray = []
    for (let i = 0; i < numbers.length - 2; i++){
        if (i < i + 1 && i + 1 > i + 2){
            emptyArray.push(1);
        } else if (i > i + 1 && i + 1 < i + 2){ 
            emptyArray.push(1);
        } else {
            emptyArray.push(0);
        }
    }
    return emptyArray;
}

solution(nums);