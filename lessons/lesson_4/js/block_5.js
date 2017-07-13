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
    if (month == 12 || month <= 2) {
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
