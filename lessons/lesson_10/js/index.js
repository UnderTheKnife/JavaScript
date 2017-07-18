function display(num, answer, fields){
    var result = document.getElementById('result'+num),
        field;
    fields.forEach(function (element ){
        field = document.getElementById(element + num);
        field.value = '';
    } );
    result.innerHTML = answer;
}

function task_1(a) {
    var answer,
        fields = ['a'];
    if (a === ''){
        answer = 'Введите число!';
    } else {
        answer = a + ' ^ 2 = ' + Math.pow(parseInt(a), 2);
    }
    display(1, answer, fields);
}

function task_2(a, b) {
    var answer,
        fields = ['a', 'b'];
    if (a === '' || b === ''){
        answer = 'Введите переменные!';
    } else {
        answer = a.concat(' + ', b, ' = ', parseInt(a) + parseInt(b));
    }
    display(2, answer, fields);
}

function task_3(a, b, c) {
    var answer,
        fields = ['a', 'b', 'c'];
    if (a === '' || b === '' || c === '') {
        answer = 'Введите переменные!';
    } else {
        answer = a.concat(' - ', b, ' / ', c, ' = ', (parseInt(a) - parseInt(b)) / parseInt(c));
    }
    display(3, answer, fields);

}

function task_4(day) {
    var answer,
        fields = ['day'],
        days = [
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
        ];
    if (day === '' || !parseInt(day)) {
        answer = 'Введите число!';
    } else if (parseInt(day) < 1 || parseInt(day) > 7){
        answer = 'Число должно быть в диапазоне от 1 до 7';
    } else {
        answer = days[day -1];
    }
    display(4, answer, fields);
}
