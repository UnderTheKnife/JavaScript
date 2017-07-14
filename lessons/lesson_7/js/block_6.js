function task_1() {
    var result = document.getElementById('result1'),
        str = 'я учу javascript!';
        result.innerHTML = str[0].toUpperCase()+ str.slice(1);
}

function task_2() {
    var result = document.getElementById('result2'),
        str = 'я учу javascript!',
        arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1)
    }
    result.innerHTML = arr.join(' ');
}

function task_3() {
    var result = document.getElementById('result3'),
        str = 'var_test_text',
        arr = str.split('_');
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1)
    }
    result.innerHTML = arr.join('');
}
