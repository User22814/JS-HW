//task 1
let name = prompt("Enter your name: ");
alert("Hello, his name is " + name);

//task 2
let year = +prompt("Enter your year: ");
const yearNow = 2022;
alert("Your age: " + (yearNow-year));

//task 3
let length = +prompt("Enter length of square: ");
alert("Перимертр квадрата = " + (length*4));

//task 4
let radius = +prompt("Enter radius: ");
alert("Площадь окружности = " + Math.PI * radius**2);

//task 5
let s = +prompt("Введите расстояние до города: ");
let t = +prompt("Введите время: ");
alert(s/t + "км/ч");

//task 6
let dollars = +prompt("Enter dollars: ");
const dollarToEuro = 0.99;
alert(dollarToEuro*dollars + "EURO");

//task 7
let memory = +prompt("Memory in GB: ");
const gbToMb = 1024;
alert(Math.floor(memory*gbToMb/820));

// task 8
let sumOfMoney = +prompt("Total money: ");
let priceOfChocolate = +prompt("Price of Chocolate: ");
alert("Хватит на " + Math.floor(sumOfMoney/priceOfChocolate) + " шоколадок и останется " + sumOfMoney%priceOfChocolate);


//task 9
let number9 = +prompt("Введите трехзначное число: ");
let lastNumber = number9%10; // *100
number9 = (number9 - lastNumber)/10; // 12
let middleNumber = number9%10; // *10
let firstNumber = (number9 - middleNumber)/10; // *1 
number9 = lastNumber*100 + middleNumber*10 + firstNumber; //
alert(number9);

//task 10
let number10 = +prompt("Введите число: ");
alert("Четное: " + (number10%2 == 0))