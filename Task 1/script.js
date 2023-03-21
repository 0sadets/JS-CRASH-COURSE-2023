//first
const yearOfBirth = prompt("Enter the year of birth:");
alert("You are " + (2023 - yearOfBirth) + " y.o.");
//second
let radius = prompt("Enter the radius: ");
if(radius<=0) {
  alert("Invalid data");
}
else{
  alert("The radius of circle is: " + Math.round(Math.PI*radius*radius));
}
//third
let distance = prompt("Enter the distance(km):");
if(distance<0){
  alert("Invalid data");
  //return false;
  //return;
}
else{}
let time = prompt("Enter the time(h): ");
if(time<0){
  alert("Invalid data");
}
else{}
alert("Recomended speed: "+ Math.ceil(distance/time) + " km/h.");
//fourth

const sumDollar = prompt("Enter the dollar amount: ");
if(sumDollar<0){
  alert("Invalid data");
}
alert( sumDollar + " = " + (sumDollar*0.95) );

//fifth
let GB = prompt("Enter the capacity of a flash drive(gb):");
let MB = GB*1024;
alert("You can save there " + Math.floor(MB/820) + " files");

//additional practice
// 1 task

const a = prompt("Enter distance in miles: ");
alert(a + " miles is " + a/0.621371);

//2 task
let hours = prompt("Enter current hour: ");
let minutes = prompt("Enter current minute: ");
let hoursLeft = 23 - hours;
let minutesLeft = 60 - minutes;
alert(hoursLeft + " hours and " + minutesLeft +" minutes left until the end of the day.");

