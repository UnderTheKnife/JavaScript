task_1.num = 0;
function task_1() {
    var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        document.getElementById('result1').style.display = 'block';
        for (var key in obj) {
            document.getElementById('result1').innerHTML += key.concat(' : ', obj[key], '; <br>');
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
    var obj = {Коля: 200, Вася: 300, Петя: 400};
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        document.getElementById('result2').style.display = 'block';
        for (var key in obj) {
            document.getElementById('result2').innerHTML += key.concat(' - зарплата ', obj[key], 'доларов.', '<br>');
        }
        document.getElementById('button2').innerHTML = 'Скрыть результат';
    } else {
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result2').innerHTML = '';
        document.getElementById('button2').innerHTML = 'Показать результат';

    }
}