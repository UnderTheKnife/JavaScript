task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1');
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML += 'Max : ' + Math.max(4, -2, 5, 19, -130, 0, 10) + '<br>';
        result.innerHTML += 'Min : ' + Math.min(4, -2, 5, 19, -130, 0, 10) + '<br>';
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}