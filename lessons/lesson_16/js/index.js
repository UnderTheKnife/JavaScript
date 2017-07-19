function display(num, answer, but) {
    var result = document.getElementById('result' + num),
        button = document.getElementById('button' + num);
    (but === undefined) ? but = true : but;
    if (but === true) {
        if (result.style.display === 'none') {
            result.style.display = 'block';
            result.innerHTML = answer;
            button.innerHTML = 'Скрыть результат';
        } else {
            result.style.display = 'none';
            result.innerHTML = '';
            button.innerHTML = 'Показать результат';
        }
    } else {
        result.innerHTML = answer;
    }
}

function ucfirst(str) {
    return str[0].toUpperCase() + str.substr(1);
}

function inArray(str, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return true;
        }
    }
    return false;
}

function task_1(str) {
    var arr = str.split(' '),
        newArr = [],
        answer;
    if (str === '') {
        answer = 'Заполните строку!';
    } else {
        for (var i = 0; i < arr.length; i++) {
            newArr.push(ucfirst(arr[i]));
        }
        answer = newArr.join(' ');
    }
    display(1, answer, false);
}

function task_2() {
    var str = 'var_text_hello',
        arr = str.split('_'),
        newArr = [],
        newStr;
    for (var i = 1; i < arr.length; i++) {
        newArr.push(ucfirst(arr[i]));
    }
    newStr = arr[0  ] + newArr.join('');
    display(2, newStr, false);
}

function task_3(str, substr) {
    var answer;
    if (str === '' || substr === '') {
        answer = 'Заполните строки!';
    } else {
        var arr = str.split(',');
        answer = inArray(substr, arr);
    }
    display(3, answer, false);

}

function task_4() {
    var str = '123456',
        arr = str.split(''),
        answer;
    for (var i = 0; i < arr.length; i += 2) {
        var x;
        x = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = x;
    }
    answer = arr.join('');
    display(4, answer);
}