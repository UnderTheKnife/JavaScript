function task_1() {
    var result = document.getElementById('result1');
    result.innerHTML = '';
    result.innerHTML += Math.floor(Math.random() * ( 100 )) + 1;
}

function task_2() {
    var result = document.getElementById('result2'),
        arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * ( 100 )) + 1;
    }
    result.innerHTML = arr;
}