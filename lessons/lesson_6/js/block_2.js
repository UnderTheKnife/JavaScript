task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1'),
        st;
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        st = Math.pow(2, 10);
        result.innerHTML = st;
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
        st;
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        result.style.display = 'block';
        st = Math.sqrt(245);
        result.innerHTML = st;
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
        arr = [4, 2, 5, 19, 13, 0, 10],
        sum = 0,
        st;
    task_3.num++;
    if (task_3.num % 2 !== 0 ) {
        result.style.display = 'block';
        arr.forEach(function (element) {
            sum += Math.pow(element, 3);
        });
        st = Math.sqrt(sum);
        result.innerHTML += st;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}
