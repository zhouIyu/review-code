// 基本类型
let a; // undefined
const b = 1; // 数字类型 number
const c = 'first'; //字符串 string
const d = false; // 布尔值boolean
const s = Symbol('s'); // symbol

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(s);

// 引用类型
const obj = {}; // 对象
const arr = []; // 数组
const isNull = null; // 特殊的引用类型

// 函数
function fn() { }

// typeof能判断的类型？
// 基本类型 和函数
console.log(typeof a); // undefined
console.log(typeof obj); // object
console.log(typeof isNull); // object
console.log(typeof fn); /// function
