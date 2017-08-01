function task_1() {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  alert(arr[1][0]);
}

function task_2() {
  const obj = {
    js: [
      'jQuery',
      'Angular'
    ],
    php: 'hello',
    css: 'world'
  };

  alert(obj['js'][0]);
}

function task_3() {
  const days = {
    'ru': {
      0: 'Понедельник',
      1: 'Вторник',
      2: 'Среда',
      3: 'Четверг',
      4: 'Пятница',
      5: 'Суббота',
      6: 'Воскресенье'
    },
    'en': {
      0: 'Monday',
      1: 'Tuesday',
      2: 'Wednesday',
      3: 'Thursday',
      4: 'Friday',
      5: 'Saturday',
      6: 'Sanday'
    }
  };

  alert(days.ru[0]);
  alert(days.en[2]);
}

function task_4() {
  const days = {
    'ru': {
      0: 'Понедельник',
      1: 'Вторник',
      2: 'Среда',
      3: 'Четверг',
      4: 'Пятница',
      5: 'Суббота',
      6: 'Воскресенье'
    },
    'en': {
      0: 'Monday',
      1: 'Tuesday',
      2: 'Wednesday',
      3: 'Thursday',
      4: 'Friday',
      5: 'Saturday',
      6: 'Sanday'
    }
  };
  const lang = 'en';
  const day = 2;

  alert(days[lang][day]);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', task_1);
  window.document.getElementById('task2').addEventListener('click', task_2);
  window.document.getElementById('task3').addEventListener('click', task_3);
  window.document.getElementById('task4').addEventListener('click', task_4);
});
