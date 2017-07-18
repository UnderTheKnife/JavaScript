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
    var arr1 = [1, 2, 3],
        arr2 = [4, 5, 6],
        answer = arr1.concat(arr2);
    display(1, answer);
}

function task_2() {
    var arr = [1, 2, 3],
        answer = arr.reverse();
    display(2, answer);
}

function task_3() {
    var arr = [1, 2, 3];
    arr.push(4, 5, 6);
    display(3, arr);

}

function task_4() {
    var arr = [1, 2, 3];
    arr.unshift(4, 5, 6);
    display(4, arr);
}

function task_5() {
    var arr = ['js', 'css', 'jq'];
    display(5, arr.shift());
}

function task_6() {
    var arr = ['js', 'css', 'jq'];
    display(6, arr.pop());
}

function task_7() {
    var arr = [1, 2, 3, 4, 5],
        answer = arr.slice(0, 3);
    display(7, answer);
}

function task_8() {
    var arr = [1, 2, 3, 4, 5],
        answer = arr.slice(-2);
    display(8, answer);
}

function task_9() {
    var arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);
    display(9, arr);
}

function task_10() {
    var arr = [1, 2, 3, 4, 5],
        answer = arr.splice(1, 3);
    display(10, answer);
}

function task_11() {
    var arr = [1, 2, 3, 4, 5];
    arr.splice(3, 0, 'a', 'b', 'c');
    display(11, arr);
}

function task_12() {
    var arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');
    display(12, arr);
}

function task_13() {
    var arr = [3, 4, 1, 2, 7];
    display(13, arr.sort());
}

function task_14() {
    var arr = {js: 'test', jq: 'hello', css: 'world'},
        answer = Object.keys(arr);
    display(14, answer);
}
