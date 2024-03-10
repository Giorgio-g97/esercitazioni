import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

//15a
const today = dayjs();
const afterFiveDays = today.add(5, 'd')
const formatDay = afterFiveDays.format('MMMM, D')
// console.log(formatDay)

//15b
const afterOneMonth = today.add(1, 'M').format('MMMM, D')
// console.log(afterOneMonth);

//15c
const beforeOneMonth = today.subtract(1, 'M').format('MMMM, D')
// console.log(beforeOneMonth);

//15d
// console.log(today.format('dddd'))

//15e/15f
export default function isWeekend(date){
  const formatDay = date.format('dddd');
  if(formatDay === 'Saturday' || formatDay === 'Sunday'){
    // console.log(true);
    return formatDay
  }
}