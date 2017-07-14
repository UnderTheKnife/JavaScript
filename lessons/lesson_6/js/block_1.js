task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1'),
        a = 10,
        b = 3;
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML = 'a % b = ' + a % b;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_2.num = 0;
function task_2(a, b) {
    var result = document.getElementById('result2'),
        button = document.getElementById('button2');
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        result.style.display = 'block';
        (a % b === 0) ? result.innerHTML = 'Делится.' : result.innerHTML = 'Делится с остатком.';
        button.value = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.value = 'Показать результат';

    }
}
