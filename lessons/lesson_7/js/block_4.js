task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1'),
        str = 'Я учу javascript!';
        arr = str.split(' ');
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML = arr;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_2.num = 0;
function task_2() {
    var result = document.getElementById('result2'),
        button = document.getElementById('button2'),
        str = 'Я учу javascript!';
    arr = str.split('');
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML = arr;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_3.num = 0;
function task_3() {
    var result = document.getElementById('result3'),
        button = document.getElementById('button3'),
        date  = '2025-12-31',
        arr = date.split('-');
    task_3.num++;
    if (task_3.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML = arr[2] + '.' + arr[1] + '.' + arr[0];
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}
