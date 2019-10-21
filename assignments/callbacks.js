// Create a higher order function and invoke the callback function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/

// 1ST CALLBACK
function getLength(arr, cb) {
    return cb(arr[getLength.length]); // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
    return cb(arr[getLength.length - 1]); // last passes the last item of the array into the callback.
}

// 2ND CALLBACK 
function sumNums(x, y) {
    return x + y; // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function multiplyNums(x, y) {
    return x * y; // multiplyNums multiplies two numbers and passes the result to the callback.
}

function calculate(callback, x, y) {
    return callback(x, y);
}
console.log(calculate(sumNums, 4, 5));
console.log(calculate(multiplyNums, 7, 12));

// 3RD CALLBACK
// function contains(item, list, cb) {
//     let cb = (item, list) => {
//             if (list.includes(item)) {
//                 return true;
//             }
//             return false;
//         }
//         // contains checks if an item is present inside of the given array/list.
//         // Pass true to the callback if it is, otherwise pass false.
//     return cb();
// }

// console.log(contains('Pencil', items, cb));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.

}