const date2 = document.querySelector(".date2");
const date1 = document.querySelector(".date1");
function getDateValue(date) {
  dateValue = date.value
  const dateObjInMS = new Date(dateValue).getTime();//in ms
  console.log(typeof dateObjInMS);
  return dateObjInMS;
}

document.querySelector('.getValue').addEventListener('click', ()=>{
    let date2Ms = getDateValue(date2)
    let date1Ms = getDateValue(date1)
    let dif = date2Ms-date1Ms

    let difference = Math.round(dif / (1000 * 60 * 60 * 24))
    console.log(difference);
})