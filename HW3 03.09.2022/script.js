// HW 3

//task 1
// let left = +prompt('Введите левый интервал диапазона: ');
// let right = +prompt('Введите правый интервал диапазона: ');
// let sum = 0;

// for(let i = left; i < right + 1; i++){
//     sum += i;
// }
// alert('sum: ' + sum);

//task 2
// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');
// a = Math.abs(a);
// b = Math.abs(b);
// if (b > a){
//     var temp = a; a = b; b = temp;
// }
// while (true) {
//     if (b == 0) alert(a);
//     a %= b;
//     if (a == 0) alert(b);
//     b %= a;
// }

//task 3
// let num = +prompt('Введите число ');
// for(let i = 1; i < num + 1; i++){
//     if(num%i == 0){
//         alert(i);
//     }
// }

//task 4
// let num = +prompt('Введите число ');
// alert(String(num).length)

//task 5
// let num;
// let positiveNum = 0;
// let negativeNum = 0;
// let nullNum = 0;
// let chetnNum = 0;
// let nechetnNum = 0;
// for (let i = 1; i < 10 + 1; i++){
//     num = +prompt('Введите число    ');
//     if (num > 0) positiveNum += 1;
//     else if (num < 0) negativeNum += 1;
//     else if (num == 0) nullNum +=1;

//     if (num%2 == 0) chetnNum += 1;
//     else nechetnNum += 1;
// }
// alert('Positive num: ' + positiveNum + '\nNegative num: ' + negativeNum + '\nNull num: ' + nullNum + '\nChetnie num: ' + chetnNum + '\nNechetnie num: ' + nechetnNum);

//task 6
// let firstNum;
// let secondNum;
// let sign;
// let flag = "";
// do{
//     firstNum = +prompt('Введите первое число ');
//     secondNum = +prompt('Введите второе число ');
//     sign = prompt('Введите операцию  ');
//     if (sign == "+") alert(firstNum + secondNum);
//     else if (sign == "-") alert(firstNum - secondNum);
//     else if (sign == "*") alert(firstNum * secondNum);
//     else if (sign == "/" && secondNum != 0) alert(firstNum / secondNum);

//     flag = prompt('Для продолжения калькулятора введите Yes ');
// }while(flag == "Yes")

//task 7
// let numStr = prompt('Введите число: ');
// let posNum = +prompt('Введите на сколько цифр надо сдвинуть число ');
// let strNumFirst = '';
// let strNumSecond = '';

// for(let i = 0; i < posNum; i++){
//     strNumFirst += numStr[i];
// }

// for (let i = posNum; i < numStr.length; i++){
//     strNumSecond += numStr[i];
// }

// alert(strNumSecond + strNumFirst);

//task 8
// let flag = '';
// let index = 0;
// let day = '';
// do{
//     if (index % 7 == 0){
//         alert("День недели: Понедельник");
//         flag = prompt('Введите OK для продолжения ');
//     } else if (index % 7 == 1){
//         alert("День недели: Вторник");
//         flag = prompt('Введите OK для продолжения ');
//     } else if (index % 7 == 2){
//         alert("День недели: Среда");
//         flag = prompt('Введите OK для продолжения ');
//     } else if (index % 7 == 3){
//         alert("День недели: Четверг");
//         flag = prompt('Введите OK для продолжения ');
//     } else if (index % 7 == 4){
//         alert("День недели: Пятница");
//         flag = prompt('Введите OK для продолжения ');
//     } else if (index % 7 == 5){
//         alert("День недели: Суббота");
//         flag = prompt('Введите OK для продолжения ');
//     } else if (index % 7 == 6){
//         alert("День недели: Воскресенье");
//         flag = prompt('Введите OK для продолжения ');
//     }
//     index ++;
// }while(flag == 'OK');

//task 9
// for (let i = 2; i < 10; i++){
//     for(let j = 2; j < 10; j++){
//         document.write(i + '*' + j + '=' + i*j + '\r\n');
//     }
// }

//task 10
let N = 50;
let flag = false;
let ans;
do{
    ans = +prompt('1. Ваше число > '+ N + '\n 2. Ваше число < ' + N + '\n 3. Ваше число =' + N);
    if (ans == 1){
        N = Math.floor(N + N/2);
        alert(N);
    } else if(ans == 2){
        N = Math.floor(N/2);
        alert(N);
    } else if(ans == 3){
        flag = true;
    }
}while(flag == false)

alert("Ваше число = " + N);