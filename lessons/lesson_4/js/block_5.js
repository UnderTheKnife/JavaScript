function task_1(day) {
    var decade;
    if (day <= 10 ) {
        decade = 1;
    } else if (day >= 11 && day <=20) {
        decade = 2;
    } else if (day >= 21 && day <=30) {
        decade = 3;
    } else {
        decade = 'Unknown';
    }
    alert('Декада : ' + decade);
}

function task_2(month) {
    var result;
    if (parseInt(month) === 12 || month <= 2) {
        result = 'Зима';
    } else if (month >= 3 && month <= 5) {
        result = 'Весна';
    } else if (month >= 6 && month <= 8) {
        result = 'Лето';
    } else if (month >= 9 && month <= 11) {
        result = 'Осень';
    } else {
        result = 'Unknown';
    }
    alert('Пора года : ' + result);
}

function task_3(str) {
    (str[0] === 'a') ? alert('Да!') : alert('Нет!');
}

function task_4(str, number) {
    if (!isNaN(str)) {
        (parseInt(str[0]) === number) ? alert('Да!') : alert('Нет!');
    } else {
        alert('Строка должна содержать число!');
    }
}

function task_5(str) {
    var numbers = str.split(""),
        result = 0;
    if (!isNaN(str) && str.length === 3) {
        numbers.forEach(function(element){
            result += parseInt(element);
        });
        alert(result);
    } else {
        alert('Строка должна содержать 3-х значное число!');
    }
}

function task_6(str) {
    if (!isNaN(str) && str.length === 6) {
        ((str[0] + str[1] + str[2]) === (str[3] + str[4] + str[5])) ? alert('Да!') : alert('Нет!');
    } else {
        alert('Строка должна содержать 6-ти значное число!');
    }
}