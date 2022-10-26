// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = prompt("Enter a Number");
  if (num % 2 == 0){
    alert("number is even")
}
else {
  alert("number is odd")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = prompt("Enter the First Number");
let num2 = prompt("Enter the Second Number");
if (num1>num2) {
  alert("The max value is "+num1)
}
else{
  alert("The max value is "+num2)
}

// 3. Convert the above code using`?` terniary operator
num1>num2 ? 
    alert("The max value is " + num1)
    :
    alert("The max value is " + num2);


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
 let housename= prompt("Enter the Housename");
if (housename == "stark") {
  alert("Winter is coming")
}
else if (housename == "lannister"){
  alert("A lannister always pays his debt")
}
else {
  alert("All men must die")
}

// 5. Convert the above code using`?` terniary operator
housename == "stark" ? 
    alert("Winter is coming")
    :
  housename == "lannister" ?
    alert("A lannister always pays his debts")
    :
    alert("All men must die")

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("Enter the no. of month"));
switch (month) {
  case 1:
    alert("No. of days is 31");
    break;
  case 2:
    alert("No. of days is 28");
    break;
  case 3:
    alert("No. of days is 31");
    break;
  case 4:
    alert("No. of days is 30");
    break;
  case 5:
    alert("No. of days is 31");
    break;
  case 6:
    alert("No. of days is 30");
    break;
  case 7:
    alert("No. of days is 31");
    break;
  case 8:
    alert("No. of days is 31");
    break;
  case 9:
    alert("No. of days is 30");
    break;
  case 10:
    alert("No. of days is 31");
    break;
  case 11:
    alert("No. of days is 30");
    break;
  case 12:
    alert("No. of days is 31");
    break;
  default:
    alert("Please enter the no. between 1 to 12");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter your Salary"))
switch (true){
  case salary<=20000 :
    alert("In hand salary after Tax Deduction is "+ salary*90/100);
    break;
  case salary<=40000:
    alert("In hand salary after Tax Deduction is "+ salary*80/100);
    break;
  case salary>50000:
    alert("In hand salary after Tax Deduction is "+ salary*70/100);
    break;
    default:
      alert("please enter a valid value")
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Please enter your marks"));

/*if(marks>100) {
  alert("Marks can't be greater than 100")
}
else if (marks>80 && marks<100){
  alert("Grade A")
}
else if (marks>50 && marks<80) {
  alert("Grade B")
}
else if (marks>30 && marks<50){
  alert("Grade C")
}
else if (marks>0) {
  alert("Grade D")
}
*/
switch (true) {
  case (marks>100):
    alert("Grade A");
    break;
  case (marks>80 && marks<100):
    alert("Grade B");
    break;
  case (marks>50 && marks<80):
    alert("Grade C");
    break;
  case (marks>30 && marks<50):
    alert("Grade D");
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside ?");

switch(true) {
  case (weather == "sunny"):
    alert("Wear a T-shirt");
    break;
  case (weather == "rainy"):
    alert("Don't forget to take your raincoat");
    break;
  case (weather == "hot"):
    alert("Get a hanky");
    break;
  case (weather == "freezing"):
    alert("Get your sweater on");
    break;
  default:
    alert("Not a valid input")
}
