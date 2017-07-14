task_1.num = 0;
function task_1() {
    var i = 1;
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        document.getElementById('result1').style.display = 'block';
        while (i <= 100) {
            document.getElementById('result1').innerHTML += i + '<br>';
            i++;
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
    var i = 11;
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        document.getElementById('result2').style.display = 'block';
        while (i <= 33) {
            document.getElementById('result2').innerHTML += i + '<br>';
            i++;
        }
        document.getElementById('button2').innerHTML = 'Скрыть результат';
    } else {
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result2').innerHTML = '';
        document.getElementById('button2').innerHTML = 'Показать результат';

    }
}

task_3.num = 0;
function task_3() {
    var i = 0;
    task_3.num++;
    if (task_3.num % 2 !== 0 ) {
        document.getElementById('result3').style.display = 'block';
        while (i <= 100) {
            if (i % 2 === 0) {
                document.getElementById('result3').innerHTML += i + '<br>';
            }
            i++;
        }
        document.getElementById('button3').innerHTML = 'Скрыть результат';
    } else {
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result3').innerHTML = '';
        document.getElementById('button3').innerHTML = 'Показать результат';

    }
}

task_4.num = 0;
function task_4() {
    var i = 1,
        sum = 0;
    task_4.num++;
    if (task_4.num % 2 !== 0 ) {
        document.getElementById('result4').style.display = 'block';
        while (i <= 100) {
            sum += i;
            i++;
        }
        document.getElementById('result4').innerHTML = sum;
        document.getElementById('button4').innerHTML = 'Скрыть результат';
    } else {
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result4').innerHTML = '';
        document.getElementById('button4').innerHTML = 'Показать результат';

    }
}
