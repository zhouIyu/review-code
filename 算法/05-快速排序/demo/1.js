const createArray = require('../../createArray');
const quickSort = require('../quickSort');

const originArray = createArray(10);
console.log(originArray);
const array = quickSort(originArray);
console.log(array);