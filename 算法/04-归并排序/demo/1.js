const createArray = require('../../createArray');
const mergeSort = require('../mergeSort');

const originArray = createArray(10);
console.log(originArray);
const array = mergeSort(originArray);
console.log(array);