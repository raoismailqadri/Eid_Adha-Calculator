// // PRACTICE QUESTION

var days = ["Sunday","Monday","Tuesday","Wednesday","Friday","Saterday"];
var getDay = new Date().getDay();
document.write(`Today the days is = ${days[getDay]}`,"<br>")

// // // PRACTICE QUESTION2 

// var todaysDay = new Date().getTime();
// document.write(`The run time for now shows in millisecond is = ${todaysDay}`,"<br>");

// // PRACTICE QUESTION3 Calculater of Age

var user = prompt("Plz Enter your date of birth");

var todaysDay = new Date().getTime();
var dobUser = new Date(user).getTime();
var netAge = todaysDay - dobUser;
var formula = netAge / (1000*60*60*25*365);
document.write(`The Date of birth you Enter is = ${user}`,"<br>");
document.write(`Your Age is = ${Math.floor(formula)}`,'<br>')

// PRACTICE QUESTION4 Eid Calculator

var todaysDay = new Date().getDay();
var eidDay = new Date('17 jun,2024').getDay();
var dayLeft = todaysDay - eidDay;
var formula = dayLeft / (1000*60*60*30*365);
document.write(`The Months left in comming Eid Adha is = ${formula}`,'<br>')

var todaysDay = new Date().getHours();
var eidDay = new Date('17 jun,2024').getHours();
var dayLeft = todaysDay - eidDay  ;
var formula = dayLeft / (1000*60*60*30*365);
document.write(formula,'<br>')

var todaysDay = new Date().getMinutes();
var eidDay = new Date('17 jun,2024').getMinutes();
var dayLeft = todaysDay - eidDay;
var formula = dayLeft / (1000*60*60*30*365);
document.write(formula,'<br>')