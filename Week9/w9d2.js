/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, items) {
    let criteriaKeys = Object.keys(criteria);
    let result = [];
    // loop through items
    for (let person of items) {
        let match = true;
        for (let i = 0; i < criteriaKeys.length; i++) {
            if (person[criteriaKeys[i]] !== criteria[criteriaKeys[i]]) {
                match = false;
            }
        }
        if (match === true) {
            result.push(person);
        }
    }
    return result;
}

// console.log(findObjects(searchCriteria1, items));
// console.log(findObjects(searchCriteria2, items));
// Object.keys(items)
/**
 * - Time: O(?).
 * - Space: O(?).
 */
function findObjectsv2(criteria,items) {
    let exist = Object.values(items).includes("Bob")
    return exist
}
console.log(findObjectsv2(searchCriteria1,items))
console.log(findObjectsv2(searchCriteria2,items))

