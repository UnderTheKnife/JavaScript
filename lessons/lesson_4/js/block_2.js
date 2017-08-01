function task_1(test) {
  let answer = (test) ? 'Верно' : 'Неверно';

  alert(answer);

  /*if (test) {
      alert('Верно');
  }else {
      alert('Неверно');
  }*/
}

function task_2(test) {
  let answer = (!test) ? 'Верно' : 'Неверно';

  alert(answer);

  /*if (!test) {
      alert('Верно');
  }else {
      alert('Неверно');
  }*/
}

window.addEventListener('load',() => {
  for (let button = 1; button <= 2; button += 1) {
    window.document.getElementById(`task${button}-true`).addEventListener('click',
      () =>{
        window[`task_${button}`](true);
      });
    window.document.getElementById(`task${button}-false`).addEventListener('click',
      () =>{
        window[`task_${button}`](false);
      });
  }
});
