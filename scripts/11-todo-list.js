const arrayList = ['wake up'];

// Ora 9h

for(let i= 0; i < arrayList.length; i++){
  const task = arrayList[i];
  const html = `<p>${task}</p>`
  const resTask = document.querySelector('.js-todolist').innerHTML
  resTask += html
}

const addList = () => {
  const inputName = document.querySelector(".input-js");
  // console.log(inputName);
  arrayList.push(inputName.value);
  console.log(arrayList);
  inputName.value = "";
};
