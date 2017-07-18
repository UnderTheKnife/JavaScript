function display(num, answer, fields){
    var result = document.getElementById('result'+num),
        field;
    fields.forEach(function (element ){
        field = document.getElementById(element + num);
        field.value = '';
    } );
    result.innerHTML = answer;
}

function task_1(a, b) {
    var answer = a.concat(' = ', b, ' ? : '),
        fields = ['a', 'b'],
        num1 = parseInt(a),
        num2 = parseInt(b);
    if (a === '' || b === '' || !parseInt(a) || !parseInt(b)){
        answer = 'Введите число!';
    } else {
        (num1 === num2) ? answer += true : answer += false;
    }
    display(1, answer, fields);
}

function task_2(a, b) {
    var answer = a.concat(' + ', b, ' > 10',' ? : '),
        fields = ['a', 'b'],
        num1 = parseInt(a),
        num2 = parseInt(b);
    if (a === '' || b === '' || !parseInt(a) || !parseInt(b)){
        answer = 'Введите число!';
    } else {
        (num1 + num2 > 10) ? answer += true : answer += false;
    }
    display(2, answer, fields);
}

function task_3(a) {
    var answer = a + ' < 0 ? : ',
        fields = ['a'],
        num = parseInt(a);
    if (a === '' || !parseInt(a)){
        answer = 'Введите число!';
    } else {
        (num < 0) ? answer += true : answer += false;
    }
    display(3, answer, fields);

}
