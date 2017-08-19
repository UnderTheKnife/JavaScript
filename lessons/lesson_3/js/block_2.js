function task1() {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  };

  alert(obj['c']);
  alert(obj.c);
}

function task2() {
  const arr = {
    'Kolya': '1000',
    'Vasya': '500',
    'Petya': '200'
  };
  let key;

  for (key in arr) {
    if (key === 'Kolya' || key === 'Petya') {
      alert(`${key} : ${arr[key]}`);
    }
  }
}

function task3() {
  const days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
  };

  alert(days[4]);
}

function task4() {
  const days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
  };
  let date = new Date();
  let day = date.getDay();

  alert(days[day]);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task1);
  window.document.getElementById('task2').addEventListener('click', task2);
  window.document.getElementById('task3').addEventListener('click', task3);
  window.document.getElementById('task4').addEventListener('click', task4);
});
