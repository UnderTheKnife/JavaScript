function task_1() {
    var hour = 60*60,
        day = hour * 24,
        month = day * 30;
    alert('Number of seconds in one hour : ' + hour);
    alert('Number of seconds in one day : ' + day);
    alert('Number of seconds in one month : ' + month);
}

function task_2() {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    alert(hours + ':' + minutes + ':' + seconds);
}

function task_3() {
    var number = 12;
    alert(Math.pow(number, 2));
}