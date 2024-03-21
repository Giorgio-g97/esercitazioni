const myArr = [];

const ul = document.createElement('ul')

function getRandNum() {
  let randNum;
  for (i = 0; i < 10; i++) {
    randNum = Math.floor(Math.random() * 100);//Math.floor() arrotonda, .random() genera numero casuale
    myArr.push(randNum);
  }
  console.log(myArr);
}

function verPari() {
  let arrPari = [];
  getRandNum();
  for (let n in myArr) {
    myArr[n] % 2 === 0 ?  arrPari.push(myArr[n]) : null
  }
  console.log(arrPari);
}

verPari();
