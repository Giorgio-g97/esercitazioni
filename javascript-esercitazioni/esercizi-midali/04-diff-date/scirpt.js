const date2 = document.querySelector(".date2");
const date1 = document.querySelector(".date1");
function getDateValue(date) {
  const dateObj = new Date(date.value);
  const dateFormat = dateObj.toLocaleDateString('it-IT', {dateStyle: "short"});
  console.log(dateFormat);
}

document.querySelector('.getValue').addEventListener('click', ()=>{
    getDateValue(date2)
    getDateValue(date1)

    
})