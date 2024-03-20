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
    weekday: 'short'
  }
];
const firstDate =
  oggi.toLocaleString("it-IT", options[0]) +
  " " +
  oggi.toLocaleString("it-IT", options[1]);
dateArr.push(firstDate);

const secondDate = oggi.toLocaleTimeString() + ' ' + oggi.toLocaleTimeString('it-IT', {hour12: true})
dateArr.push(secondDate);

const thirdDate = oggi.toLocaleString('it-IT', options[2]) + ' ' + oggi.toLocaleString("it-IT", options[1]);
dateArr.push(thirdDate)

// console.log(firstDate, secondDate, thirdDate);

console.log(dateArr);