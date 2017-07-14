task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1');
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML = 'я учу javascript!'.length;
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
        str = 'я учу javascript!';
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML += 'Substr : ' + str.substr(1, 4) + '<br>';
        result.innerHTML += 'Substring : ' + str.substring(2, 6) + '<br>';
        result.innerHTML += 'Slice : ' + str.slice(1, 5) + '<br>';
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
        button = document.getElementById('button3');
    task_3.num++;
    if (task_3.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML = 'я учу javascript!'.indexOf('учу');
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

task_4.num = 0;
function task_4() {
    var result = document.getElementById('result4'),
        button = document.getElementById('button4'),
        str = 'я учу javascript!',
        n = 10,
        res;
    task_4.num++;
    if (task_4.num % 2 !== 0 ) {
        result.style.display = 'block';
        if (str.length > n) {
            res = str.substr(0, n) + '...';
        } else {
            res = str;
        }
        result.innerHTML = res;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}
