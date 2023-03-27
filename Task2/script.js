//Task 1 

//1) switch
let number = +prompt("Enter the number:");
switch(number)
{
  case 1: alert("!");break;
  case 2: alert("@");break;
  case 3: alert("#");break;
  case 4: alert("$");break;
  case 5: alert("%");break;
  case 6: alert("^");break;
  case 7: alert("&");break;
  case 8: alert("*");break;
  case 9: alert("(");break;
  case 0: alert(")");break;
  
}

//2) ?:
const year = +prompt("Enter the year:");
year%400==0 || year%4==0 ? alert("This is a leap year.") : alert("This is not a leap year.");
//3)
// const day = +prompt("Enter the day:");
// const month = +prompt("Enter the month:");
// const year_ = +prompt("Enter the year:");
// if(day<31){
//   ++day;
// }
// else{day = 1;}


//Task2
//1)
const a = +prompt("Enter the lower limit");
const b = +prompt("Enter the upper limit");
let sum = 0;
for(let i = a; i<=b; i++){
  sum +=i;
}
alert("The sum of all numbers in the range: " + sum);

//2)
let n = prompt("Enter the number: ");
let count = 0;
// do{
//   n = n / 10;
//   Math.floor(n);
//   ++count;
// } while(n != 0);
alert("The number of digits is: " + n.length);

//3)
let input; 
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;
let index = 0;
for (let index = 1; index <= 10; index++) {
   input = parseInt(prompt("Enter the " + index + " number:" ));

   (input < 0) ? negative++ : (input > 0 ) ? positive++ : zero++;
   (input%2===0) ? even++ : odd++;
    
}
alert("There are: " + negative + " negative, " + positive + " positive, "+ zero + " zero, "+ even + " even, "+ odd + " odd numbers.");
//4)
