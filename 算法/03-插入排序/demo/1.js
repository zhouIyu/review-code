const createArray = require('../../createArray');
const insertSort = require('../insertSort');

const originArray = createArray(10);
console.log(originArray);
const array = insertSort(originArray);
console.log(array);