import { logger } from '../index';

// Changes should be made below this comment

// Instructions
// (1) - create a method onto ObjectOfMethods called method2
// (2) - method 2 acceptance criteria
//         -takes two params
//         -first Param will be an array
//         -second Param will be an anonymous callback function
// (3) - the function body should first declare a new empty array variable
// (4) - the function body should then loop through the array ===>!!! use regular for loop
// (5) - each iteration should invoke our callback function
// (6) - callback should be passed 3 arguments
//         -first is the item at the current iteration (think array at index or array[index])
//         -second is just the index of the current iteration
//         -third is the entire array being looped over
// (7) - the result from invoking callback at current iteration should be pushed into the array  from step 3
// (8) - finally the method should return the array after the loop has finished
// (9) - create a callback function on ObjectOfCallBacks called callBack2
// (10) - callback 2 acceptance criteria
//         -takes three params
//         -first Param will be item
//         -second Param will index
//         -third Param will be array
// (11) - function body should return (item + 5) to be captured in method 2

// Save file and check browser for passing test
// If tests are not passing checkout examples directory for some resources

const problem2 = () => {

  const ObjectOfMethods = {

  };

  const ObjectOfCallBacks = {
    
  };

  //TEST DO NOT CHANGE
  const recieved =  ObjectOfMethods.method2 ? ObjectOfMethods.method2([1, 2, 3, 4, 5], ObjectOfCallBacks.callBack2) : null
  const expected = [6, 7, 8, 9, 10];
  const problem = '2';

  logger(recieved, expected, problem);

  return JSON.stringify(recieved) == JSON.stringify(expected);
};
export default problem2;
