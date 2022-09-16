//HW4
function task1(num1, num2){
    if (num1 < num2){
        return -1;
    } else if (num1 > num2){
        return 1;
    } else if (num1 == num2){
        return 0;
    }
}

function task2(num){
    sum = 1;
    for (let i = 1; i <= num; i++){
        sum *= i;
    }
    return sum;
}

function task3(num1, num2, num3){
    return num1*100 + num2*10 + num3;
}

function task4(num1, num2){
    if (num2 == 0){
        num2 = num1;
    }
    return num1 * num2;
}

function task5(num){
    let sum = 0;
    for (let i = 1; i < num; i++){
        if (num % i == 0){
            sum += i;
        }
    }
    return num == sum;
}

function task6(num1, num2){
    for (let i = num1; i <= num2; i++){
        if (task5(i)){
            document.write(i + '\n');
        }
    }
    return "Вывод в документ";
}

function task7(hour, minute, seconds){
    if (hour <= 9){
        hour = "0" + hour;
    }
    if (minute <= 9){
        minute = "0" + minute;
    }
    if (seconds <= 9){
        seconds = "0" + seconds;
    }
    return hour + ":" + minute+ ":" + seconds;
}

function task8(hour, minute, seconds){
    return hour*3600 + minute*60 + seconds;
}

function task9(seconds){
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours*3600) / 60);
    let secondsTask = seconds - hours*3600 - minutes*60;

    if (hours <= 9){
        hours = "0" + hours;
    }
    if (minutes <= 9){
        minutes = "0" + minutes;
    }
    if (secondsTask <= 9){
        secondsTask = "0" + secondsTask;
    }
    return hours + ":" + minutes+ ":" + secondsTask;
}

function task10(hours1, minutes1, seconds1, hours2, minutes2, seconds2){
    sec1 = task8(hours1, minutes1, seconds1)
    sec2 = task8(hours2, minutes2, seconds2)
    secRazn = Math.abs(sec1 - sec2);

    return task9(secRazn);
}

// let num1 = +prompt("Number 1: ");
// let num2 = +prompt("Number 2: ");
// let num3 = +prompt("Number 3: ");
// let num4 = +prompt("Number 4: ");
// let num5 = +prompt("Number 5: ");
// let sign = prompt("Sign: ");
// let bool = prompt("bool: ");

let hour1 = +prompt("Hour 1: ");
let minute1 = +prompt("Minute 1: ");
let seconds1 = +prompt("Seconds 1: ");

let hour2 = +prompt("Hour 2: ");
let minute2 = +prompt("Minute 2: ");
let seconds2 = +prompt("Seconds 2: ");

alert(task10(hour1, minute1, seconds1, hour2, minute2, seconds2));