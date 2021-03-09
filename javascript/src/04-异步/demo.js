async function async1 () {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2 () {
    console.log('async2');
}

console.log('script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

async1();

new Promise(resolve => {
    console.log('Promise1');
    resolve();
}).then(() => {
    console.log('Promise2');
});

console.log('script end');
event.stopPropagation()
