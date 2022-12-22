const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

//   select target

   const giveaway = document.querySelector(".giveaway");
   const deadline = document.querySelector(".deadline")
   const items = document.querySelectorAll(".deadline-format h4");



  // Now working on date object:-------

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();


  let futureDate = new Date(tempYear,tempMonth,tempDay+10,11,30,0);//year/month/date/hours/minutes/seconds/ms;
  
  // manually taking all value
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  // Month are zero index based
  const month = months[futureDate.getMonth()];
  // console.log(month);
  const weekday = weekdays[futureDate.getDay()];
  // console.log(weekday);
  const date = futureDate.getDate();
  // console.log(date);

  // add in giveaway:--

giveaway.textContent = `giveaway ends on ${weekday},${date} ${month} ${year} ${hours}:${minutes}am`
 
// working on countdown timer:-----

// future time in ms.
const futureTime = futureDate.getTime();//ms

function getremainingTime(){
  const today = new Date().getTime();//ms
  const t = futureTime-today//ms
  // 1s = 1000ms
  // 1m = 60s 
  // 1hr =60m
  // 1d =24hr
  // value in ms
  
  const oneDay = (24*60*60*1000)//ms
  const oneHour = (60*60*1000)//ms
  const oneMinute = (60*1000)//ms
  
  // calculate all values:---------
  //if value in ms then divide the value with ms
  const days  =Math.floor(t/oneDay);
  // find only left over hours and minutes and sconds(reminder)
  let hours = Math.floor((t%oneDay)/oneHour);
  let minutes = Math.floor((t%oneHour)/oneMinute);
  let seconds = Math.floor((t%oneMinute)/1000);


  // set values  array
const values = [days,hours,minutes,seconds];

// formaat function
function format(item){
  if(item<10){
    // 01,02,03
    return item = `0${item}`
  }else
  return item
}
items.forEach(function(item,index){
  // console.log(values[index]);
  item.innerHTML = format(values[index])
})
// set interval 
if(t<0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class = "expired"> Sorry this giveaway has expired!</h4>`
  }

}

// countdown
let countdown = setInterval(getremainingTime,1000);
// getremainingTime() invoke it after set all coz you cant access this countdown variable before call.
getremainingTime()
