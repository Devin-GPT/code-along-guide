import problem1 from './problems/problem1.js';
import problem2 from './problems/problem2.js';
import problem3 from './problems/problem3.js';

export const logger = (recieved, expected, problem) => {
  const logStrR = `Recieved From Problem ${problem}`;
  const logStrE = `Expected From Problem ${problem}`;
  //what Test is recieving
  console.log(logStrR, recieved);
  //what Test is expecting
  console.log(logStrE, expected);
  return JSON.stringify(recieved) == JSON.stringify(expected);
};

const updateLiStatus = (id, testCaseFunc) => {
  const isPassed = testCaseFunc()
  document.getElementById(id).textContent = isPassed ? 'Great Job' : 'Grind More';
  document.getElementById(id).style.color = isPassed ? 'green' : 'red';
};

const updateUI = () => {
  updateLiStatus('prob-1', problem1);
  updateLiStatus('prob-2', problem2);
  updateLiStatus('prob-3', problem3);
};

updateUI();

