task_1.num = 0;
function task_1() {
    var i,
        arr = [1, 2, 3, 4, 5];
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        document.getElementById('result1').style.display = 'block';
        for (i = 0; i < arr.length; i++) {
            document.getElementById('result1').innerHTML += arr[i] + '<br>';
        }
        document.getElementById('button1').innerHTML = 'Скрыть результат';
    } else {
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result1').innerHTML = '';
        document.getElementById('button1').innerHTML = 'Показать результат';

    }
}

task_2.num = 0;
function task_2() {
    var i,
        result = 0,
        arr = [1, 2, 3, 4, 5];
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        document.getElementById('result2').style.display = 'block';
        for (i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        document.getElementById('result2').innerHTML = result;
        document.getElementById('button2').innerHTML = 'Скрыть результат';
    } else {
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result2').innerHTML = '';
        document.getElementById('button2').innerHTML = 'Показать результат';

    }
}