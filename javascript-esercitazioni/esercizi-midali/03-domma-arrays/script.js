const myArr = [];

function genRandNum() {
    let sum = 0;
    for(let i = 0; i < 10; i++){
        const n = Math.floor(Math.random() * 100);
        myArr.push(n)
        sum += n;
    }
    console.log(myArr);
    console.log(sum);
}

genRandNum();