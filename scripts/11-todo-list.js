const arrayList = [];

const addList = () => {
  const inputName = document.querySelector(".input-js");
  // console.log(inputName);
  arrayList.push(inputName.value);
  console.log(arrayList);
  inputName.value = "";
};
