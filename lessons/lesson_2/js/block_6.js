function person() {
    var name = prompt('Пожалуйста, ведите ваше имя.', 'Гость');
    alert('Ваше имя : ' + name);
}

function number() {
    var number = prompt('Пожалуйста, ведите число.', '0');
    alert('Квадрат вашего числа : ' + (Math.pow(number, 2)));
}