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
