/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]
    return a new array of the names of people (not friends) who are at high risk of infection
    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const expected = ["Person One", "Person Three"];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {
    let atRisk = []
    for (let onePerson of persons) {
        if (onePerson.isSocialDistancing === false) {
            for (let oneFriend of onePerson.friends) {
                if (oneFriend.isSocialDistancing === false && oneFriend.hasCovid === true) {
                    atRisk.push(`${onePerson.firstName} ${onePerson.lastName}`)
                    break
                }
            }
        }
    }
    return atRisk
}


console.log(coronaVirusAtRisk(people));
/**
 * - Time O(?).
 * - Space O(?).
 */
function coronaVirusAtRiskFunctional(persons) {
    let atRisk = persons.filter(person => {
        if (!person.isSocialDistancing) {
            return person.friends.filter(friend => friend.hasCovid && !friend.isSocialDistancing);
        }
    })
    let results = atRisk.map(person => {
        return (person.firstName + " " + person.lastName)
    })
    // let atRisk = persons.filter(person => person.isSocialDistancing == false)
    // let results = atRisk.filter(person.friends => person.friends.hasCovid)
    //console.log(atRisk);
    return results;
}

console.log(coronaVirusAtRiskFunctional(people));

/* 
Given an array of objects representing people, and a string representing a bad habit
return a "santasNaughtyList" containing the first and last names of all the people who
have the matching bad habit so that santa knows how much coal he needs.
Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];

const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];

const badHabit3 = "vapes too much";
const expected3 = [];

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    let naughtyList = []
    for (let onePerson of persons) {
        for (let oneHabit of onePerson.habits) {
            if (oneHabit === badHabit) {
                naughtyList.push(`${onePerson.firstName} ${onePerson.lastName}`)
            }
        }
    }
    return naughtyList;
}

// console.log(students[0].habits[1])

console.log(santasNaughtyList(students, badHabit1))
console.log(santasNaughtyList(students, badHabit2))
console.log(santasNaughtyList(students, badHabit3))
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
    return persons
        .filter(person =>
            person.habits.includes(badHabit))
        .map(person => person.firstName + " " + person.lastName);
}

console.log(santasNaughtyListFunctional(students, badHabit1));
console.log(santasNaughtyListFunctional(students, badHabit2));
console.log(santasNaughtyListFunctional(students, badHabit3));