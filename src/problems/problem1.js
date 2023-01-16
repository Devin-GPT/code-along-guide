import { logger } from '../index';

const recieved = [1, 2, 3, 4, 5];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const problem = '1';
// Changes should be made below this comment

// Instructions
// (1) - create a method onto ObjectOfMethods called method1
// (2) - method 1 acceptance criteria
//         -takes two params
//         -first Param will be an array
//         -second Param will be an anonymous callback function
// (3) - the function body should loop through the array !!! use regular for loop
// (4) - each iteration should invoke our callback function
// (5) - callback should be passed 3 arguments
//         -first is the item at the current iteration
//         -second is just the index of the current iteration
//         -third is the entire array being looped over
// (6) - create a callback function called callBack1
// (7) - callback 1 acceptance criteria
//         -takes three params
//         -first Param will be item
//         -second Param will index
//         -third Param will be array
// (8) - the function body should should push the param item into the recieved array decalred at top of file

// Save file and check browser for passing test
// If tests are not passing checkout examples directory for some resources

const problem1 = () => {

  const ObjectOfMethods = {
  
  };

  const callBack1 = (item, index, array) => {

  };

  // Changes should be made above this comment
  ObjectOfMethods.method1 ? ObjectOfMethods.method1([1, 2, 3, 4, 5], callBack1) : null

  logger(recieved, expected, problem);

  return JSON.stringify(recieved) == JSON.stringify(expected);
};

export default problem1;
