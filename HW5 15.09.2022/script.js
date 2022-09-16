// Task 2 HW5
// class Task2{
//     constructor(name){
//         this.stringTask = name;
//     }
//     task2(){
//         let str = `${this.stringTask}`;
//         str = str.split('');
//         let n = str.length; 
//         // проверка букв
//         for(var i = 0; i < n; i++){
//             if(str[i] == str[i].toLowerCase()){
//                 str[i] = str[i].toUpperCase();
//             } else if(str[i] == str[i].toUpperCase()){
//                 str[i] = str[i].toLowerCase();
//             }
//         if (!isNaN(parseFloat(str[i])) && isFinite(str[i]))
//             str[i] = '_';
//         }
//         return str.join("");
//     }
// }

// let str = prompt("Введите строку");

// let StrTask2 = new Task2(str);

// alert(StrTask2.task2());


// =======================================================================================================


// Task 3
class Task3{
    constructor(str){
        this.str = str;
    }
    task3(strTask3){
        this.str += strTask3;
        return this.str;
    }
}


let flag = true;
let element = new Task3("");
while(flag){
    let str = prompt("Введите строку");

    alert(element.task3(str));
    if (str == 'stop'){
        flag = false;
    }
}


// =======================================================================================================


// Task 4
// class Task4{
//     constructor(str){
//         this.equation = str;
//     }
//     task4(){
//         let str = this.equation.split("");
//         let firstDigit = parseFloat(str[0]);
//         let SecondDigit = parseFloat(str[2]);
//         switch(str[1]){
//             case '+':
//                 return firstDigit + SecondDigit;
//             case '-':
//                 return firstDigit - SecondDigit;
//             case '*':
//                 return firstDigit * SecondDigit;
//             case '/':
//                 if (SecondDigit == 0) return "SecondDigit = 0";
//                 else return firstDigit/SecondDigit;
//         }
//     }
// }


// let str = prompt("Введите уравнение");

// let StrTask4 = new Task4(str);

// alert(StrTask4.task4());


// =======================================================================================================


// Task 5
// class Task5{
//     constructor(str, razd){
//         this.str = str;
//         this.razd = razd;
//     }
//     task5(){ 
//         return this.str.split(this.razd);
//     }
// }

// let str = prompt("Введите строку");

// let razd = prompt("Введите разделитель");

// let StrTask5 = new Task5(str, razd);

// alert(StrTask5.task5());
