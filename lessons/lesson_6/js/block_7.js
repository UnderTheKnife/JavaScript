task_1.num = 0;
function task_1() {
    var result = document.getElementById('result1'),
        button = document.getElementById('button1'),
        arr = [12, 15, 20, 25, 59, 79];
        sum = 0;
    task_1.num++;
    if (task_1.num % 2 !== 0 ) {
        result.style.display = 'block';
        for (var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        result.innerHTML = sum / arr.length;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';

    }
}

function task_2(num) {
    var result = document.getElementById('result2'),
        fact = 1;
    for (var i = 1; i <= num; i++){
        fact *= i;
    }
    result.innerHTML = '';
    result.innerHTML = fact;

}