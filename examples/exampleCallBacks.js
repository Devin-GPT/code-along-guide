// this is an anonymous function which if passed into a fuinction as a argumnet becomes a callback

// Anonymous because we have no declaring const or function key work
(param1, param2) => {
  console.log(param1);
  console.log(param2);
};


// example if we need to save this anonymous function to use later we would declare it 

 const callBackExample =(param1, param2) => {
    console.log(param1);
    console.log(param2);
  }

  // OR old way
  
  function callBackExample(param1, param2) {
    console.log(param1);
    console.log(param2);
  }

// another way to save it for later is if it was assigned as method to an object

export const ObjectOfCallBacksExample = {
  callBackExample: (param1, param2) => {
    console.log(param1);
    console.log(param2);
  },
};

//these are exactly the same accept how they are invoked

// assigned as a function value to variable

callBackExample(('param 1', 'param 2'));

// assigned as a method to an object

ObjectOfCallBacksExample.callBackExample('param 1', 'param 2');

// Either way Params and out put are exactly the same