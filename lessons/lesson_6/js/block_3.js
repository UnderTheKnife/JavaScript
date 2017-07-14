task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1');
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML += Math.sqrt(379).toFixed(0) + '<br>';
        result.innerHTML += Math.sqrt(379).toFixed(1) + '<br>';
        result.innerHTML += Math.sqrt(379).toFixed(2) + '<br>';
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
        obj = {floor : '', ceil : ''};
    task_2.num++;
    if (task_2.num % 2 !== 0 ) {
        result.style.display = 'block';
        obj.floor = Math.floor(Math.sqrt(587));
        obj.ceil = Math.ceil(Math.sqrt(587));
        for (var key in obj) {
            result.innerHTML += key.concat(' : ', obj[key],'<br>');
        }
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}