const createArray = require('../../createArray');
const bubbleSort = require('../bubbleSort');

const originArray = createArray(10);
console.log(originArray);
const array = bubbleSort(originArray);
console.log(array);