task_1.num = 0;
function task_1() {
    var arr = [2, 5, 9, 15, 0, 4],
        result = document.getElementById('result1'),
        button = document.getElementById('button1');
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 3 && arr[i] < 10) {
                result.innerHTML += arr[i] + '<br>';
            }
        }
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_2.num = 0;
function task_2() {
    var arr = [-2, 5, 9, -15, 0, 4],
        result = document.getElementById('result2'),
        button = document.getElementById('button2'),
        sum = 0;
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
               sum += arr[i];
            }
        }
        result.innerHTML = sum;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_3.num = 0;
function task_3() {
    var arr = [1, 2, 5, 9, 4, 13, 4, 10],
        result = document.getElementById('result3'),
        button = document.getElementById('button3');
    task_3.num++;
    if (task_3.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === 4) {
                result.innerHTML = 'Есть!';
                break;
            }
        }
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_4.num = 0;
function task_4() {
    var arr = [10, 20, 30, 50, 235, 3000],
        result = document.getElementById('result4'),
        button = document.getElementById('button4');
    task_4.num++;
    if (task_4.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++) {
            str = arr[i].toString(10);
            if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
                result.innerHTML += arr[i] + '<br>';
            }
        }
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_5.num = 0;
function task_5() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        result = document.getElementById('result5'),
        button = document.getElementById('button5'),
        str;
    task_5.num++;
    if (task_5.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++) {
            if (i === 0) {
                str = '-';
            }
            str += arr[i] + '-';
        }
        result.innerHTML = str;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_6.num = 0;
function task_6() {
    var arr = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
        ],
        result = document.getElementById('result6'),
        button = document.getElementById('button6');
    task_6.num++;
    if (task_6.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'Суббота' : {
                    result.innerHTML += '<b>' + arr[i] + '</b><br>';
                    break;
                }
                case 'Воскресенье' : {
                    result.innerHTML += '<b>' + arr[i] + '</b><br>';
                    break;
                }
                default  : {
                    result.innerHTML += arr[i] + '<br>';
                }
            }
        }
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_7.num = 0;
function task_7() {
    var arr = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
        ],
        days = {
            1:'Понедельник',
            2:'Вторник',
            3:'Среда',
            4:'Четверг',
            5:'Пятница',
            6:'Суббота',
            7:'Воскресенье'
        },
        result = document.getElementById('result7'),
        button = document.getElementById('button7'),
        date = new Date(),
        day = date.getDay(),
        current = days[day];
    task_7.num++;
    if (task_7.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'Суббота' : {
                    result.innerHTML += '<b>' + arr[i] + '</b><br>';
                    break;
                }
                case 'Воскресенье' : {
                    result.innerHTML += '<b>' + arr[i] + '</b><br>';
                    break;
                }
                case current : {
                    result.innerHTML += '<i>' + arr[i] + '</i><br>';
                    break;
                }
                default  : {
                    result.innerHTML += arr[i] + '<br>';
                }
            }
        }
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_8.num = 0;
function task_8() {
    var result = document.getElementById('result8'),
        button = document.getElementById('button8'),
        n = 1000,
        num = 0;
    task_8.num++;
    if (task_8.num % 2 !== 0 ) {
        result.style.display = 'block';
        while (n > 50) {
            n /= 2;
            result.innerHTML += n + '<br>';
            num ++;
        }
        result.innerHTML += 'Количество иттераций : ' + num;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}