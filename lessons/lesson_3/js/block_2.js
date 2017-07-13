function task_1() {
    var obj = {a: 1, b: 2, c: 3};
    alert(obj['c']);
    alert(obj.c);
}

function task_2() {
    var arr = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
    for (var key in arr){
        if (key === 'Коля' || key === 'Петя') {
            alert(key + ' : ' + arr[key]);
        }
    }
}

function task_3() {
    var days = {
            1:'Понедельник',
            2:'Вторник',
            3:'Среда',
            4:'Четверг',
            5:'Пятница',
            6:'Суббота',
            7:'Воскресенье'
        };
    alert(days[4]);
}

function task_4() {
    var days = {
            1:'Понедельник',
            2:'Вторник',
            3:'Среда',
            4:'Четверг',
            5:'Пятница',
            6:'Суббота',
            7:'Воскресенье'
        },
        date = new Date(),
        day = date.getDay();
    alert(days[day]);
}
