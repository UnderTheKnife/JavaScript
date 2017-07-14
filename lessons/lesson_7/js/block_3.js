task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1'),
        str = 'Я-учу-javascript!';
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        result.innerHTML = (str.replace(/-/g, '!'));
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}
