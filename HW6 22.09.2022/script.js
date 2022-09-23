// Lesson6 22.09.2022
// let arr = new Array();

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// months[1] = 'March';

// alert(months);

// push(); // добавление элементов в конец массива
// pop(); // удаление элементов с конца массива
// unshift(); // добавление элементовв в начало массива
// shift(); // удаление элементов с начала массива


// console.log - вывод в консоль

// months.push('PineApple');

// alert(months);

// let num = +prompt("Enter the number")

// let arr = [];

// for(let i = 0; i < num; i++){
//     let arrNum = +prompt("Enter the number")
//     arr.push(arrNum);
// }

// alert(arr);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }

// delete fruits[5]; - удаление 5-го элемента. Но длина остается такой же

// fruits.splice(3, 1); - (с какой позиции удалять, сколько элементов удалять)

// fruits.splice(-1, 0, 'Grape'); - добавление элементов

// fruits.slice(-2); - режет с координаты и до конца

// fruits.indexOf('Grape'); - дает индекс 'Grape'

// fruits.includes('Grape'); - есть ли в нашем массиве 'Grape' ? Возвращает true OR false

// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let tmp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = tmp;
//             }
//         }
//     }
//     alert(arr);
// }

// let arr = [8,6,3,6,1];

// bubbleSort(arr);

// alert(arr.reverse()); // переварачивает массив

// let str = 'one two three';

// let arr = str.split(' ');

// alert(arr);

// str = arr.join('!');

// alert(str);

// ==================================================================================
// Practice

// Task 1
// let arr = new Array();
// for(let i = 0; i < 10; i++){
//     let Num = +prompt("Введите число в массив");
//     arr.push(Num);
// }
// max = 0;
// min = 0;
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] > max){
//         max = arr[i];
//     }
//     if (arr[i] < min){
//         min = arr[i];
//     }
// }

// alert("min=" + min + ", max=" + max);


// Task 2
// let arr = new Array();
// for(let i = 0; i < 5; i++){
//     let Num = +prompt("Введите число в массив");
//     arr.push(Num);
// }

// let summa = 0;

// for(let i = 0; i < arr.length; i++){
//     summa += arr[i];
// }

// alert(arr + '\n' + 'summa=' + summa + ', среднее значение=' + summa/arr.length);


// Task 3
// let arr1 = new Array();
// for(let i = 0; i < 7; i++){
//     let Num1 = +prompt("Введите число в первый массив");
//     arr1.push(Num1);
// }

// let arr2 = new Array();
// for(let i = 0; i < 7; i++){
//     let Num2 = +prompt("Введите число во второй массив");
//     arr2.push(Num2);
// }

// for(let i = 0; i < arr1.length; i++){
//     let bool = arr1[i]==arr2[i];  
//     alert("index = " + i + ', cравнение = ' + bool);
// }

// Task 4
// let arr = new Array();
// for(let i = 0; i < 10; i++){
//     let Num = +prompt("Введите число в массив");
//     arr.push(Num);
// }

// let arr2 = new Array();
// for(let i = 0; i < arr.length; i++){
//     if((i+1)%2 == 0){
//         arr2.push(arr[i]);
//     }
// }

// alert(arr2);

// Task 5
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

let arr = [8,6,3,6,1];

alert(bubbleSort(arr).reverse());

