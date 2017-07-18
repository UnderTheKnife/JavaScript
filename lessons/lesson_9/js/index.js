function display(num, answer, but ){
    var result = document.getElementById('result'+num),
        button = document.getElementById('button'+num),
        styles = getComputedStyle(result);
    (but === undefined) ? but = true : but;
    if (styles.display === 'none' ) {
        result.style.display = 'block';
        result.innerHTML = answer;
        if (but) {button.innerHTML = 'Скрыть результат';}
    } else {
        result.style.display = 'none';
        result.innerHTML = '';
        if (but) { button.innerHTML = 'Показать результат';}
    }
}

function task_1_1() {
    var str = 'hello';
    str = str[0].toUpperCase() + str.substr(1);
    display(1, str, false);
}

function task_1_2() {
    var  str = 'hello';
    str = str.split('');
    str[0] = str[0].toUpperCase();
    var answer = str.join('');
    display(1, answer, false);
}

function task_2() {
    var str = '123456',
        answer = str.split('').reverse().join('');
    display(2, answer);
}

function task_3() {
    var num = 3751,
        answer = num.toString(10).split('').sort().join('');
    display(3, answer);

}

function task_4() {
    var str = 'http://theory.phphtml.net/',
        answer;
    if (str.substr(0, 7) === 'http://') {
        answer = 'Да';
    } else {
        answer = 'Нет';
    }
    display(4, answer);
}

function task_5() {
    var str = 'index.html',
        answer;
    if (str.substr(-5) === '.html') {
        answer = 'Да';
    } else {
        answer = 'Нет';
    }
    display(5, answer);
}
