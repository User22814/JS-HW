// HW 2

//task 1
// let age_task1 = +prompt('Age: ');

// if (age_task1 >= 0 && age_task1 < 12){
//     alert("Ребенок");
// } else if (age_task1 >= 12 && age_task1 < 18){
//     alert("Подросток");
// } else if (age_task1 >= 18 && age_task1 < 60){
//     alert("Взрослый");
// } else if (age_task1 >= 60){
//     alert("Пенсионер");
// }

//task 2
// let numTask2 = +prompt("Введите число: ");

// switch (numTask2) {
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
// }

//task 3
// let numTask3 = prompt("Введите трехзначное число: ");

// let fNum = numTask3[0];
// let sNum = numTask3[1];
// let tNum = numTask3[2];

// if ((fNum == sNum) || (fNum == tNum) || (sNum == tNum)){
//     alert("Есть одинаковые");
// } else {
//     alert("Нет одинаковых");
// }

// task 4
// let year = +prompt("Введите год: ");

// if ((year % 400 == 0) || (year % 4 == 4 && year % 100 != 0)){
//     alert("Год високосный");
// } else {
//     alert("Год не високосный");
// }

//task 5
// let numTask5 = prompt("Введите пятиразрядное число: ");

// if (numTask5[0] == numTask5[4] && numTask5[1] == numTask5[3]){
//     alert("Палиндром");
// } else {
//     alert("Не Палиндром");
// }

//task 6
// let sumUSD = +prompt("Введите количество USD: ");
// let valuta = prompt("Введите в какую валюту хотите конвертировать: ");

// switch (valuta) {
//     case "EUR":
//         alert(sumUSD * 1);
//         break;
//     case "UAN":
//         alert(sumUSD * 6.85);
//         break;
//     case "AZN":
//         alert(sumUSD * 1.7);
//         break;
// }

//task 7
// let numTask7 = +prompt("Введите сумму покупки: ");

// if (numTask7 >= 200 && numTask7 < 300) {
//     alert(numTask7 * 0.97);
// } else if (numTask7 >= 300 && numTask7 < 500){
//     alert(numTask7 * 0.95);
// } else if(numTask7 >= 500) {
//     alert(numTask7 * 0.93);
// }

//task 8 d <= a
// let length = +prompt("Введите длину окружности ");
// let perimeter = +prompt("Введите периметр квадрата ");

// let a = perimeter / 4;
// let d = length / Math.PI;

// if (d <= a){
//     alert("Окружность поместиться в квадрат ");
// } else {
//     alert("NO: Окружность не поместиться в квадрат ");
// }

// task 9
// let questionNum1 = prompt("Question 1: \n 2 + 2 = ? \n A. 3 \n B. 4 \n C. 5");

// let sum = 0;

// if (questionNum1 == "B") {
//     alert("Question 1 is correct");
//     sum += 1;
// }

// let questionNum2 = prompt("Question 2: \n 3 * 6 = ? \n A. 18 \n B. 20 \n C. 24");

// if (questionNum2 == "A") {
//     alert("Question 2 is correct");
//     sum += 1;
// }

// let questionNum3 = prompt("Question 3: \n 81 / 9 = ? \n A. 7 \n B. 8 \n C. 9");

// if (questionNum3 == "C") {
//     alert("Question 3 is correct");
//     sum += 1;
// }

// alert("Ты набрал " + sum + " балла");

//task 10
// let day = +prompt("Введите день ");
// let month = +prompt("Введите месяц ");
// let year = +prompt("Введите год ");

// let dayInMonth = 0;

// if ((year % 400 == 0) || (year % 4 == 4 && year % 100 != 0)){
//     dayInVisYear = 29;    
// } else {
//     dayInVisYear = 28;
// }

// // alert(dayInVisYear);

// switch (month) {
//     case 1:
//         dayInMonth = 31;
//         break;
//     case 2:
//         dayInMonth = dayInVisYear; // Високосный год надо проверить
//         break;
//     case 3:
//         dayInMonth = 31;
//         break;
//     case 4:
//         dayInMonth = 30;
//         break;
//     case 5:
//         dayInMonth = 31;
//         break;
//     case 6:
//         dayInMonth = 30;
//         break;
//     case 7:
//         dayInMonth = 31;
//         break;
//     case 8:
//         dayInMonth = 31;
//         break;
//     case 9:
//         dayInMonth = 30;
//         break;
//     case 10:
//         dayInMonth = 31;
//         break;
//     case 11:
//         dayInMonth = 30;
//         break;
//     case 12:
//         dayInMonth = 31;
//         break;    
// }

// if (day > dayInMonth) {
//     alert("Не корректно введен день");
// } else if (day < dayInMonth){
//     day += 1;
// } else if (day == dayInMonth) {
//     day = 1;
//     month += 1;
// }

// if (month > 12) {
//     year += 1;
//     month = 1;    
// }

// if (day <= 9 && month <= 9){
//     alert("0" + day + "." + "0" + month + "." + year);
// } else if (day <= 9){
//     alert("0" + day + "." + month + "." + year);
// } else if (month <= 9){
//     alert(day + "." + "0" + month + "." + year);
// }


//task 11
// function task11(a1, a2) {
//     if (a1 < a2){
//         return -1;
//     } else if (a1 > a2){
//         return 1;
//     } else if (a1 == a2){
//         return 0;
//     }
// }
// alert(task11(1, 2));

//task 12
// function task12(a){
//     product = 1;
//     for (let i = 1; i <= a; i++) {
//         product *= i;
//     }
//     return product;
// }
// alert(task12(3));

//task 13
// function task13(a1, a2, a3){
//     return a1*100 + a2*10 + a3;
// }
// alert(task13(1, 2, 3));

//task 14
// function task14(length, width = length){
//     return length * width;
// }
// alert(task14(2));

// task 15
// function task15(a){
//     sum = 1;
//     for (let i = 2; i < a; i++){
//         if (a % i == 0){
//             sum += i;
//         }
//     }
//     if (a == sum){
//         return "Является совершенным";
//     } else {
//         return "NO: Не является совершенным";
//     }
// }
// // alert(task15(28));

// //task 16
// function task16(left, right){
//     let arr = new Array();
//     if (left == 1){
//         left += 1;
//     }
//     for (let i = left; i <= right; i++) {
//         if (task15(i) == "Является совершенным"){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// alert(task16(1, 30));

//task 17
// function task17(hour, minute, seconds){
//     if (hour <= 9 && minute <= 9 && seconds <= 9){
//         return "0" + hour + ':' + "0" + minute + ':' + "0" + seconds;
//     } else if (hour <= 9 && minute <= 9){
//         return "0" + hour + ':' + "0" + minute + ':' + seconds;
//     } else if (hour <= 9){
//         return "0" + hour + ':' + minute + ':' + seconds;
//     } else {
//         return hour + ':' + minute + ':' + seconds;
//     }
// }
// alert(task17(19, 19, 19));

//task 18
// function task18(hour, minute = "00", seconds = "00") {
//     if (hour <= 9 && minute <= 9 && seconds <= 9){
//         return "0" + hour + ':' + "0" + minute + ':' + "0" + seconds;
//     } else if (hour <= 9 && minute <= 9){
//         return "0" + hour + ':' + "0" + minute + ':' + seconds;
//     } else if (hour <= 9){
//         return "0" + hour + ':' + minute + ':' + seconds;
//     } else {
//         return hour + ':' + minute + ':' + seconds;
//     }
// }
// alert(task18(19));

// task 19
function task19(hour, minute, seconds){
    let secondsTask19 = hour * 3600 + minute * 60 + seconds;
    return secondsTask19;
}
// alert(task19(19, 20, 30));

// task 20
function task20(secondsTask20){
    let hour = Math.floor(secondsTask20 / 3600);
    let minute = Math.floor((secondsTask20 - hour*3600) / 60);
    let seconds = secondsTask20 - hour*3600 - minute*60;
    if (hour <= 9 && minute <= 9 && seconds <= 9){
        return "0" + hour + ':' + "0" + minute + ':' + "0" + seconds;
    } else if (hour <= 9 && minute <= 9){
        return "0" + hour + ':' + "0" + minute + ':' + seconds;
    } else if (hour <= 9){
        return "0" + hour + ':' + minute + ':' + seconds;
    } else {
        return hour + ':' + minute + ':' + seconds;
    }
}
// alert(task20(3666));

// task 21
function task21(hour1, minute1, seconds1, hour2, minute2, seconds2){
    let firstInSec = 0;
    let secondInSec = 0;
    firstInSec = task19(hour1, minute1, seconds1);
    secondInSec = task19(hour2, minute2, seconds2);
    return task20(Math.abs(firstInSec - secondInSec));
}
alert(task21(1, 2, 6, 0, 59, 6));