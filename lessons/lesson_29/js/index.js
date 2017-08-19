'use strict';

/*global window: false */

function block1() {
  const form = window.document.getElementById('form1');
  let sum = 0;
  let inputValue;
  let input;

  for (let i = 0; i < form.children.length - 1; i += 1) {
    input = parseInt(form.children[i].value, 10);

    if (isNaN(input)) {
      inputValue = 0;
    } else {
      inputValue = input;
    }

    sum += inputValue;

  }

  window.alert(`Сумма : ${sum}`);
}

function block2() {
  const form = window.document.getElementsByClassName('form2');
  let sum = 0;
  let inputValue;
  let input;

  for (let i = 0; i < form.length; i += 1) {

    for (let j = 0; j < form[i].children.length; j += 1) {
      input = parseInt(form[i].children[j].value, 10);

      if (isNaN(input)) {
        inputValue = 0;
      } else {
        inputValue = input;
      }

      sum += inputValue;

    }

  }

  window.alert('Сумма : ' + sum);
}

function block3() {
  const select = window.document.getElementById('select3');
  const input = window.document.getElementById('input3');
  const option = select.selectedIndex;

  input.value = select.options[option].innerHTML;
}

function block4() {
  const select = window.document.getElementById('select4');
  const input = window.document.getElementById('input4');

  select.selectedIndex = parseInt(input.value, 10);
}

const countries = {
  'Select country': [],
  'Ukraine': [
    'Kiev',
    'Lviv',
    'Odessa',
    'Cherkasy'
  ],
  'USA': [
    'New York City',
    'San Francisco',
    'Los Angeles',
    'Chikago'
  ],
  'Japan': [
    'Tokyo',
    'Kyoto',
    'Hiroshima',
    'Kawasaki'
  ]
};

function add(value) {
  const option = window.document.createElement('option');

  option.value = value;
  option.innerHTML = value;

  return option;
}

function city() {
  const parent = window.document.getElementById('block5');
  let select = window.document.getElementById('cities');

  if (this.selectedIndex === 0 && select !== null) {
    select.parentNode.removeChild(select);
  } else {

    if (select === null) {
      select = window.document.createElement('select');
      select.id = 'cities';
      parent.appendChild(select);
    } else {
      while (select.firstChild) {
        select.removeChild(select.firstChild);
      }
    }

    countries[this.value].forEach(function (city) {
      select.appendChild(add(city));
    });

  }
}

function country() {
  const parent = window.document.getElementById('block5');
  let select = window.document.getElementById('countries');
  let key;

  if (select === null) {
    select = window.document.createElement('select');
    select.id = 'countries';

    for (key in countries) {
      if (countries.hasOwnProperty(key)) {
        select.appendChild(add(key));
      }
    }

    select.addEventListener('change', city);
    parent.appendChild(select);

  }

}

window.addEventListener('load', () => {
  country();
  window.document.getElementById('button1').addEventListener('click', block1);
  window.document.getElementById('button2').addEventListener('click', block2);
  window.document.getElementById('select3').addEventListener('click', block3);
  window.document.getElementById('button4').addEventListener('click', block4);
});
