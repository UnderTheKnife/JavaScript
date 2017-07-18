function display(num, answer){
    var result = document.getElementById('result'+num),
        button = document.getElementById('button'+num),
        styles = getComputedStyle(result);
    if (styles.display === 'none' ) {
        result.style.display = 'block';
        result.innerHTML = answer;
        button.innerHTML = 'Скрыть результат';
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';
    }
}

function task_1() {
    var arr = [1, 2, 3, 5],
        flag = false,
        answer = arr + '<br><br>';
    arr.forEach(function (element) {
        if (element === 5) {
            flag = true;
        }
    });
    (flag) ? answer += 'Да' : answer += 'Нет';
    display(1, answer);
}

function task_2() {
    var num = 31,
        flag = false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0){
            flag = true;
        }
    }

    display(2, flag);
}

function task_3() {
    var arr = [1, 2, 3, 3, 5],
        flag = false,
        answer = arr + '<br><br>';
    for (var i = 1; i < arr.length; i++){
        if (arr[i] === arr[i - 1]) {
            flag = true;
        }
    }
    (flag) ? answer += 'Да' : answer += 'Нет';
    display(3, answer);
}
