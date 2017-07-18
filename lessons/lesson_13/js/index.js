function display_table(mainId, secId, answer, count){
    var main = document.getElementById('result' + mainId),
        result = document.getElementById('result' + secId),
        button = document.getElementById('button' + mainId);
    if (count % 2  !== 0 ) {
        main.style.display = 'flex ';
        result.style.marginRight = '20px';
        result.innerHTML += answer;
        button.innerHTML = 'Скрыть результат';
    } else {
        main.style.display = 'none';
        result.innerHTML = '';
        button.innerHTML = 'Показать результат';
    }
}

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

task_1.count = 0;
function task_1() {
    task_1.count ++;
    var str = '',
        secId;
    for (var i = 2; i < 10; i++){
        secId = '1_' + i;
        for (var j = 2; j <= 10; j++){
            str = ''.concat(i, ' * ', j, ' = ', i*j, '<br>');
            display_table(1, secId, str, task_1.count);
        }
    }
}

function task_2() {
    var str = '';
    for (var i = 1; i < 10; i++){
        str += i;
    }
    display(2, str);
}

function task_3() {
    var str = '';
    for (var i = 9; i > 0; i--){
        str += i;
    }
    display(3, str);
}

function task_4() {
    var str = '-';
    for (var i = 1; i < 10; i++){
        str += i + '-';
    }
    display(4, str);
}

function task_5() {
    var str = '';
    for (var i = 1; i <= 20; i++){
        for (var j = 1; j <= i; j++ ){
            str += 'x';
        }
        str += '<br>';
    }
    display(5   , str);
}

function task_6() {
    var str = '';
    for (var i = 1; i <= 9; i++){
        for (var j = 1; j <= i; j++ ){
            str += j;
        }
        str += '<br>';
    }
    display(6, str);
}

function task_7() {
    var str = '';
    for (var i = 1; i <= 5; i++){
        for (var j = 1; j <= i; j++ ){
            str += 'xx';
        }
        str += '<br>';
    }
    display(7   , str);
}