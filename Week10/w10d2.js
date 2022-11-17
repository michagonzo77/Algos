// // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// /*
//   Input: arr, callback
//   Output: arr (with elements removed)
//   Remove every element in the array, starting from idx 0,
//   until the callback function returns true when passed the
//   iterated element.
//   Return an empty array if the callback never returns true
// */

// const nums1 = [1, 4, 3, 6, 9, 15];

// const callback1 = (elem) => {
//     return elem > 5;
// };

// const expected1 = [6, 9, 15];

// const nums2 = [...nums1];
// const callback2 = (elem) => {
//     return elem > 2;
// };
// const expected2 = [4, 3, 6, 9, 15];

// const nums3 = [...nums1];
// const callback3 = (elem) => false;
// const expected3 = [];

// /**
//  * Removes every element in the array, starting from idx 0 until the callback
//  * function returns true when passed the iterated element.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<any>} arr
//  * @callback cb A callback function that expects to receive an array element.
//  * @returns {Array<any>} The given array with only the remaining items.
//  */
// function dropIt(arr, cb) {
//     let dropped = []
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i]) === true) {
//             dropped.push(arr[i])
//         }
//     }
//     return dropped
// }

// console.log(dropIt(nums1, callback1))
// console.log(dropIt(nums2, callback2))
// console.log(dropIt(nums3, callback3))



/* 
This was extracted from a react interview challenge. The items were to be
displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "cradle of civilization": [
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
// function groupObjects(items) {
//   let newObj = {}
//   for (cat of items) {
//     console.log(Object.values(cat))
//     if (Object.values(cat) === 'cute'){

//     }
//   }
//   return newObj
//   // console.log(Object.entries(items))
// }

function groupObjects(items) {
}
// const grouped = _.groupBy(objects, object => object.category)
// const grouped = _(objects, object).groupBy(object.category)
var grouped = _.mapValues(_.groupBy(objects, 'category'),
    clist => clist.map(object => _.omit(object, 'category')));
console.log(grouped)
console.log(groupObjects(objects))
