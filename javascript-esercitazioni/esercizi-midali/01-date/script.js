const dateArr = [];

const oggi = new Date();

const options = [
  {
    weekday: "long",
  },
  {
    dateStyle: "short",
  },
  {
    weekday: "short",
  },
];
const firstDate = {
  date:
    oggi.toLocaleString("it-IT", options[0]) +
    " " +
    oggi.toLocaleString("it-IT", options[1]),
};

dateArr.push(firstDate);

const secondDate = {
  date:
    oggi.toLocaleTimeString() +
    " " +
    oggi.toLocaleTimeString("it-IT", { hour12: true }),
};
dateArr.push(secondDate);

const thirdDate = {
  date:
    oggi.toLocaleString("it-IT", options[2]) +
    " " +
    oggi.toLocaleString("it-IT", options[1]),
};
dateArr.push(thirdDate);

// console.log(firstDate, secondDate, thirdDate);

// console.log(dateArr);

dateArr.forEach(date => {
  console.log(date.date);
  const h2 = document.createElement('h2');
  h2.textContent = '\u2022 ' + date.date;
  document.body.appendChild(h2)
})