// const add = function(a, b) {
// 	return a + b;
// };
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (numbersList) => numbersList.reduce((total, current) => total + current, 0);

const multiply = (numbersList) => numbersList.reduce((total, number) => total * number, 1);

const power = (a, b) => a ** b;



const factorial = function(a) {
	const nums = [];
  for (let i = a; i > 0; i--) {
    nums.push(i);
  }
  return nums.reduce((total, number) => total * number, 1);
};








// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
