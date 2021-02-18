const createArray = require('../../createArray');
const selectSort = require('../selectSort');

const originArray = createArray(10);
console.log(originArray);
const array = selectSort(originArray);
console.log(array);