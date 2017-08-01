function task1(num) {
  let result;
  
  switch (num) {
  case 1: {
    result = 'Зима';
    break;
  }
  case 2: {
    result = 'Весна';
    break;
  }
  case 3 : {
    result = 'Лето';
    break;
  }
  case 4: {
    result = 'Осень';
    break;
  }
  }

  alert(result);
}

window.addEventListener('load',() => {
  for (let button = 1; button <= 4; button += 1){
    window.document.getElementById(`task${button}`).addEventListener('click',
      () =>{
        window['task1'](button);
      });

  }
});