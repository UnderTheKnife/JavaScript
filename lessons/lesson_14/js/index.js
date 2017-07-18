function display(num, answer){
    var result = document.getElementById('result' + num),
        button = document.getElementById('button' + num);
    if (result.style.display === 'none' ) {
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
    var str = 'x',
        arr = [];
    for (var i = 1; i < 10; i++){
        arr.push(str);
        str += 'x';
    }
    display(1, arr);
}

function task_2() {
    var arr = [];
    for (var i = 1; i < 10; i++){
        var str = '';
        for (var j = 1; j <= i; j++){
            str += i;
        }
        arr.push(str);
    }
    display(2, arr);
}

function task_3(value, count) {
    var arr =[],
        answer;
    if (value === '' || count === ''){
        answer = 'Заполните поля!';
    } else  if (!parseInt(count)) {
        answer = 'Количество должно быть числом!';
    } else{
        var num = parseInt(count);
            str = value;
            for (var i = 0; i < num; i++){
                arr.push(str);
            }
            answer = arr;
    }
    document.getElementById('result3').innerHTML = answer;

}

function task_4() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        sum = 0,
        answer;
    for (var i = 0 ; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 10) {
            answer = arr + '<br>' + 'sum = ' + sum + '<br>' +(i + 1);
            display(4, answer, 'none');
            break;
        }
    }
}

function task_5() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        answer = [];
    for (var i = arr.length -1 ; i >= 0; i--) {
        answer.push(arr[i]);
    }
    display(5, answer)
}
