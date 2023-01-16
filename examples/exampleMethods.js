const functionToAssignMethodLater = (param1, param2) => {
  console.log(param1);
  console.log(param2);
};

const methodObject = {
  //this is a function assigned to a variable and then reassign to key
  methodExample: functionToAssignMethodLater,
  //this is jut the function body above copied as anonymous function to asign to key
  inlineMethod: (param1, param2) => {
    console.log(param1);
    console.log(param2);
  },
  // OR
  inlineMethodOldWay: function(param1, param2){
    console.log(param1);
    console.log(param2);
  },
};

//exactly the same
methodObject.methodExample('param 1', 'param 2');
methodObject.inlineMethod('param 1', 'param 2');
methodObject.inlineMethodOldWay('param 1', 'param 2');
