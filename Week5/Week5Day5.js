/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// quarter = 25 cents, dime = 10, nickel = 5, penny = 1
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * @param {number} cents
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
var q = 25
var d = 10
var n = 5
var p = 1


function fewestCoinChange(cents) {
    var change = {}
    while (cents >= q) {
        if (change["quarter"]) {
            change["quarter"]++
            cents -= q
        } else {
            change["quarter"] = 1
            cents -= q
        }
    }
    while (cents >= d) {
        if (change["dime"]) {
            change["dime"]++
            cents -= q
        } else {
            change["dime"] = 1
            cents -= q
        }
    }
    while (cents >= n) {
        if (change["nickel"]) {
            change["nickel"]++
            cents -= q
        } else {
            change["nickel"] = 1
            cents -= q
        }
    }
    while (cents >= p) {
        if (change["penny"]) {
            change["penny"]++
            cents -= q
        } else {
            change["penny"] = 1
            cents -= q
        }
    }
    return change
}



console.log(fewestCoinChange(cents1)) // { quarter: 1 }
console.log(fewestCoinChange(cents2)) // { quarter: 2 }
console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }