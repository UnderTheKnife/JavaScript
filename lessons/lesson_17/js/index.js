function display(num, answer) {
    var result = document.getElementById('result' + num);
    if (answer === 'clear'){
        result.innerHTML = '';
    } else {
        result.innerHTML += answer + '<br>';
    }
}

function func(arr) {
    display(1, arr[0]);
    arr.splice(0, 1);
    if (arr.length > 0) {
        func(arr);
    }
}

function func2(num) {
    var numbers = num.toString(10).split(''),
        result = 0;
    numbers.forEach(function(element){
        result += parseInt(element);
    });
    display(2, result);

    if (result > 9) {
        func2(result);
    }
}
function task_1() {
    display(1, 'clear');
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    func(arr);
}

function task_2(num) {
    display(2, 'clear');
    if (num === ''){
        display(2, 'Введите число!')
    } else {
        func2(num);
    }
}
