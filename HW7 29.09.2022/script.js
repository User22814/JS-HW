// 1 Дается предложение в котором нужно капитализировать первые буквы всех слов

// let str = prompt('Введите предложение: ');

// function capitalizeFirstChar(str){
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

// function task1(str){
//     let arr = str.split(' ');
//     let str1 = '';
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = capitalizeFirstChar(arr[i]);
//     }
//     str1 = arr.join(' ');
//     return str1;
// }

// alert(task1(str));


// 2 Создавть функцию которая меняет регистр
// К примеру из строки:
// SoMe SeNtEnCe WiTh CaMeL CaSe

// сделать:
// sOmE sEnTeNcE wItH cAmEl cAsE

// let str = prompt('Введите предложение: ');

// function UpperChar(str, pos){
//     let str_tmp = str.slice(0, pos);
//     str = str.charAt(pos).toUpperCase() + str.slice(pos + 1);
//     str_tmp += str;
//     return str_tmp;
// }

// function LowerChar(str, pos){
//     let str_tmp = str.slice(0, pos);
//     str = str.charAt(pos).toLowerCase() + str.slice(pos + 1);
//     str_tmp += str;
//     return str_tmp;
// }

// function task2(str){
//     for(let i=0; i<str.length; i++){
//         if (str[i] === str[i].toUpperCase()){
//             str = LowerChar(str, i);
//         } else if (str[i] === str[i].toLowerCase()){
//             str = UpperChar(str, i);
//         } else {
//             continue;
//         }
//     }
//     return str;
// }

// alert(task2(str));


// 3.Создать функцию которая перевернет строку. К примеру из HELLO сделает OLLEH
// Реализация должна иметь 2 версии. Через функцию и строки. И через цикл for

let str = "hello asd";

function task_3_v1(str){
    let str_res = '';
    
    for (let i = 0; i < str.length; i++){
        str_res += str[str.length - 1 - i];
    }

    return str_res;
}

function task_3_v2(str){
    let arr_str = str.split("");
    arr_str.reverse();
    return arr_str.join("");
}


alert("V1 = " + task_3_v1(str));

alert("V2 = " + task_3_v2(str));