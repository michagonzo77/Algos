
function StringChallenge(num) {
    let tempStr = ""
    for (let i = 1; i <= num; i++) {
        if (i % 15 == 0) {
            tempStr = tempStr + " " + "FizzBuzz"
        } else if (i % 3 == 0) {
            tempStr = tempStr + " " + "Fizz";
        } else if (i % 5 == 0) {
            tempStr = tempStr + " " + "Buzz";
        } else {
            tempStr = tempStr + " " + i;
        }
    }
    // code goes here  
    return tempStr;
}
// console.log(StringChallenge(100));
// keep this function call here 
// console.log(StringChallenge(readline()));

function StringChallenge2(str) {
    return str.charCodeAt(2)
}

console.log(StringChallenge2("abc"))