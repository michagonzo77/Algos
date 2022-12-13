// // // you can write to stdout for debugging purposes, e.g.
// // // console.log('this is a debug message');

// // function solution(A) {
// //     let min = A[0];
// //     let max = A[0];
// //     for(let ii = 0; i < A.length; i++){
// //         if(A[ii] < min){
// //             min = A[ii];
// //         }
// //         if(A[ii] > max){
// //             max = A[ii];
// //         }
// //     }
// //     for(let jj = 0; jj < A.length; jj++){
// //         if(j)
// //         return A.includes(A[jj])
// //     }
// //     // for(let jj = 0; jj < A.length; jj++){
// //     //     if(jj == A[jj]){
// //     //         continue;
// //     //     } else if (jj != A[jj]){
// //     //         if(jj < min && jj != 0){
// //     //             min = jj;
// //     //         }
// //     //     }
// //     // }
// //     // return min;
// //     // write your code in JavaScript (Node.js 14)
// // }





// // // go through list and find the lowest number and the highest number
// // // go through the list and find the lowest number between those 2 numbers that isn't in the list

// // let B = [1, 3, 6, 4, 1, 2]

// // // console.log(solution(B))

// // let C = [0, 1, 2, 3, 4]
// // // Length is 5. Answer is 5. Index only goes to 4.
// // let D = [0, 1, 2, 3, 5]
// // // Length is 5. Answer is 4. Index only goes to 4.
// // let E = [1, 2, 3, 4, 5]
// // // Length is 5. Answer is 6. Index only goes to 4.

// // // Set min to length + 1;
// // // Check if i < min && i not in array.
// // // Find lowest i that wasn't in array and return.

// // function solve(A){
// //     let min = A.length;
// //     for (let ii = 0; ii < A.length; ii++){
// //         if(ii < min && !A.includes(ii) == true && ii != 0){
// //             min = ii;
// //         }
// //     }
// //     if(A.includes(min)){
// //         return min + 1;
// //     }
// //     return min;
// // }
// // console.log(solve(C));
// // console.log(solve(D));
// // console.log(solve(E));
// // console.log(solve(B));


// function bananaSolve(S) {
//     const one = {
//         b: 1,
//         a: 3,
//         n: 2
//     };
//     const map = {};
//     for (let i = 0; i < S.length; i++) {
//         if (one[S[i]]) map[S[i]] = (map[S[i]] || 0) + 1;
//     }
//     for (const key of Object.keys(one)) {
//         if (!map[key]) return 0;
//     }
//     map['a'] = map['a'] >> 1;
//     map['n'] = map['n'] >> 1;
//     return Math.min(...Object.values(map));
// };

// var maxNumberOfBalloons = function (S) {
//     const map = { b: 0, a: 0, n: 0 }

//     for (let str of S) str in map && map[str]++

//     map['a'] = ~~(map['a'] / 3)
//     map['n'] = ~~(map['n'] / 2)

//     return Math.min(...Object.values(map))
// };


// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');
// let S = "NAABXXAN"
// let T = "NAANAAXNABABYNNBZ"
// let U = "QABAAAWOBL"

// console.log(maxNumberOfBalloons(S));
// console.log(maxNumberOfBalloons(T));
// console.log(maxNumberOfBalloons(U));


// function solution(S) {
//     let banana = {
//         b: 0,
//         a: 0,
//         n: 0
//     }
//     let banana2 = {}
//     // write your code in JavaScript (Node.js 14)
// }
// solution(S);

// function solveThis(text) {
//     var result = Number.MAX_VALUE;
//     var letters = new Array(26).fill(0);
//     var aCharCode = "a".charCodeAt();
//     for (var i = 0; i < text.length; i++) {
//         letters[text[i].charCodeAt() - aCharCode]++;
//     }

//     var banana = [["b", 1], ["a", 3], ["n", 2]];
//     for (var [letter, count] of banana) {
//         result = Math.min(result, Math.floor(letters[letter.charCodeAt() - aCharCode] / count));
//     }

//     return result;
// };

// console.log(solveThis(S));


function solution(S) {
    let letters = {};

    for (let i = 0; i < S.length; i++) {
        if (letters[S[i]] === undefined) letters[S[i]] = 1;
        else letters[S[i]]++;
    }

    let b = letters["B"] ? letters["B"] : 0;
    let a = letters["A"] ? Math.floor(letters["A"] / 3) : 0;
    let n = letters["N"] ? Math.floor(letters["N"] / 2) : 0;

    return Math.max(0, Math.min(b, a, n));
};

let S = "NAABXXAN"
let T = "NAANAAXNABABYNNBZ"
let U = "QABAAAWOBL"


console.log(solution(S));
console.log(solution(T));
console.log(solution(U));