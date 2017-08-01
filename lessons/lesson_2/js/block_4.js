'use strict';

function search() {
  const str = 'abcde';
  const str_array = str.split('');

  str_array.forEach(function (element, key) {
    if (element === 'a' || element === 'b' || element === 'e') {
      alert(`str[${key}] : ${element}`);
    }

  });
}

function multiplication() {
  const number = 12345;
  const array = number.toString().split('');
  let result = 1;

  array.forEach(function (element) {
    result *= element;
  });

  alert(result);
}

window.addEventListener('load',function() {
  window.document.getElementById('task1').addEventListener('click', search);
  window.document.getElementById('task2').addEventListener('click', multiplication);
});