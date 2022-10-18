// let form = document.forms[1];

// let input = form.elements.first;

// alert(input.value);

// let form= document.forms[0];
// let el = form.elements.one;

// console.log(el);
// console.log(el[0]);

// input.oninput = function(){
//     result.innerHTML= input.value;
// }

// input.onblur = function(){
//     if(!input.value.includes('@')){
//         input.classList.add('wrong');
//         errors.innerHTML = 'Please enter a valid email address';
//     }
// }

// input.onfocus = function(){
//     if(this.classList.contains('wrong')){
//         this.classList.remove('wrong');
//         errors.innerHTML = "";
//     }
// }

// input.onblur = function(){
//     if(!input.value.includes('@')){
//         this.classList.add("wrong")
//         input.focus();
//     }
//     else{
//         this.classList.remove("wrong");
//     }
// }

// click - клик левой кнопки мыши
// contextmenu - клик правой кнопки мыши
// mouseover / mouseout - при том что мышь входит внутрь / выходит из элемента
// mousedown / mouseup - при нажатий кнопки мыши / когда кнопка мыши поднимается
// mousemove - когда курсор мыши двигается

// addEventListener
// function sayHello(){
//     console.log("Hi")
// }

// input.addEventListener("click", sayHello)




// 1) Форма в которой есть инпут. В данный инпут вы вводите значения в HEX (с хештегом и обознаечниеями от 00 до FF)
// После нажатия кнопки submit background должен принимать значение которое записано внутрь input

// 2) При движении мыши background должен будет принимать ранодомное значение. 

//Task 1

let body = document.querySelector('input[type=submit]');
let input = document.querySelector('input[type=text]');



function task1(){
    let color = input.value;
    document.body.style.backgroundColor = color;
}

addEventListener('click', task1);

// Task 2

function task2() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

addEventListener('mousemove', task2);
