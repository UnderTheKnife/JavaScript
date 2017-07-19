function display(num, answer, but) {
    var result = document.getElementById('result' + num),
        button = document.getElementById('button' + num);
    (but === undefined) ? but = true : but;
    if (but === true) {
        if (result.style.display === 'none') {
            result.style.display = 'block';
            result.innerHTML = answer;
            button.innerHTML = 'Скрыть результат';
        } else {
            result.style.display = 'none';
            result.innerHTML = '';
            button.innerHTML = 'Показать результат';
        }
    } else {
        result.style.display = 'block';
        result.innerHTML = answer;
    }
}

function isNumberInRange(num) {
    return num > 0 && num < 10;
}

function getDigitsSum(num) {
    var sum = 0;
    num = String(num);

    for (var i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    return sum;
}

function isEven(num) {
    return (parseInt(num) % 2 === 0);
}

function getDivisors(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }

    return arr;
}

function task_1(num) {
    if (num === '' ||  !parseInt(num)){
        display(1, 'Введите число!', false);
    } else {
        display(1, isNumberInRange(num),false);
    }
}

function task_2() {
    var arr = [1, 3, 5, 6, 9, 11, 15, 30],
        newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isNumberInRange(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    display(2, newArr);
}

function task_3(num) {
    if (num === '' || !parseInt(num)){
        answer = 'Введите число!';
    } else  if (parseInt(num) != num) {
        answer = 'Число не целое!';
    } else{
        answer = getDigitsSum(num);
    }
    display(3, answer, false)
}

function task_4() {
    var answer= '';
    for (var i = 1 ; i <= 2017 ; i++) {
        if ( getDigitsSum(i) === 13){
            answer += i + ' ; ';
        }
    }
    display(4, answer);
}

function task_5(num) {
    if (num === '' || !parseInt(num)){
        answer = 'Введите число!';
    } else  if (parseInt(num) != num) {
        answer = 'Число не целое!';
    } else{
        answer = isEven(num);
    }
    display(5, answer, false)
}

function task_6() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    display(6, newArr)
}

function task_7(num) {
    if (num === '' || !parseInt(num)){
        answer = 'Введите число!';
    } else  if (parseInt(num) != num) {
        answer = 'Число не целое!';
    } else{
        answer = getDivisors(num);
    }
    display(7, answer, false)
}
