function asyncDemo () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000);
    });
}

async function main () {
    for (let i = 0; i < 3; i++) {
        await asyncDemo();
        console.log('OK');
    }
}

main();
