// index.js
const express = require('express');
const app = express();
const port = 3000;


function getUniqueNumbers(arr) {
  return Array.from(new Set(arr)).sort((a, b) => b - a);
}
function multiplyByTwo(arr) {
  return arr.map((num) => num * 2);
}
function getOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
function sumOfNumbers(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
function sumOfNumbersDivisibleByThree(arr) {
  return arr.reduce((acc, num) => (num % 3 === 0 ? acc + num : acc), 0);
}
app.get('/ping', (req, res) => {
  res.send('pong');
});
app.get('/  ', (req, res) => {
  const inputArr = [24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56];
  const uniqueNumbers = getUniqueNumbers(inputArr);
  res.json(uniqueNumbers);
});
app.get('/multiplied-by-two', (req, res) => {
  const inputArr = [24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56];
  const multipliedNumbers = multiplyByTwo(inputArr);
  res.json(multipliedNumbers);
});
app.get('/odd-numbers', (req, res) => {
  const inputArr = [24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56];
  const oddNumbers = getOddNumbers(inputArr);
  res.json(oddNumbers);
});
app.get('/sum-of-numbers', (req, res) => {
  const inputArr = [24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56];
  const sum = sumOfNumbers(inputArr);
  res.json(sum);
});
app.get('/sum-of-numbers-divisible-by-three', (req, res) => {
  const inputArr = [24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56];
  const sumDivisibleByThree = sumOfNumbersDivisibleByThree(inputArr);
  res.json(sumDivisibleByThree);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
