"use strict";
/*global document: false */
/*global window: false */

/*global alert: false */

function block1() {
  const elem = document.getElementById('elem1');

  elem.classList.add('www');
  elem.innerHTML = `Классы объекта : ${elem.classList}`;
}

function block2() {
  const elem = document.getElementById('elem2');

  elem.classList.remove('www');
  elem.innerHTML = `Классы объекта :  ${elem.classList}`;
}

function block3() {
  const elem = document.getElementById('elem3');

  elem.classList.contains('www');
  elem.innerHTML = `Наличие класса 'www' : ${elem.classList.contains('www')}`;
}

function block4() {
  const elem = document.getElementById('elem4');

  elem.classList.toggle('www');
  elem.innerHTML = 'Классы объекта : ' + elem.classList;
}

function block5() {
  const elem = document.getElementById('elem5');

  elem.innerHTML = 'Количество классов : ' + elem.classList.length;
}

function block6() {
  const elem = document.getElementById('elem6').classList;

  elem.forEach(function (element) {
    alert(element);
  });

}

function block7() {
  const
    elem = document.getElementById('elem7');
  elem.style.cssText = `background-color: red;
    height : 30px;
    border : 1px solid black;`;
}

function block8() {
  alert(this.tagName);
}

function block9() {
  alert(this.tagName.toLowerCase());
}

function block10() {
  this.innerHTML = `${this.innerHTML} ${this.tagName.toLowerCase()}`;
}

function block11() {
  const ol = document.getElementById('ol11');
  let li = document.createElement('li');

  li.innerHTML = 'пункт';
  ol.appendChild(li);
}

function block12() {
  const ul = document.getElementById('ul12');
  const arr = [1, 2, 3];
  let li;

  for (let i = 0; i < arr.length; i += 1) {
    li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }

}

function block13() {
  const ul = document.getElementById('ul13');
  const arr = [1, 2, 3];
  let li;

  function showLi() {
    alert(this.innerHTML);
  }

  for (let i = 0; i < arr.length; i += 1) {
    li = document.createElement('li');
    li.innerHTML = arr[i];
    li.addEventListener('click', showLi);
    ul.appendChild(li);
  }
}

function block14() {
  const ul = document.getElementById('ul14');
  const test = document.getElementById('elem14');
  let li = document.createElement('li');

  li.innerHTML = '!!!';
  ul.insertBefore(li, test);
}

function block15() {
  const elem = document.getElementById('elem15');

  elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
}

function block16() {
  const elem = document.getElementById('elem16');

  elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');
}

function block17() {
  const elem = document.getElementById('elem17');

  elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');
}

function block18() {
  const elem = document.getElementById('elem18');

  elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');
}

function block19() {
  const elem = document.getElementById('elem19');

  elem.firstElementChild.style.color = 'red';
}

function block20() {
  const elem = document.getElementById('elem20');

  elem.lastElementChild.style.color = 'red';
}

function block21() {
  const elem = document.getElementById('elem21');

  for (let i = 0; i < elem.children.length; i += 1) {
    elem.children[i].innerHTML += ' !';
  }
}

function block22() {
  const elem = document.getElementById('elem22');
  let prev = elem.previousElementSibling;

  prev.innerHTML = prev.innerHTML + '!';
}

function block23() {
  const elem = document.getElementById('elem23');
  let prev = elem.nextElementSibling;

  prev.innerHTML = prev.innerHTML + '!';
}

function block24() {
  const elem = document.getElementById('elem24');
  let prev = elem.nextElementSibling.nextElementSibling;

  prev.innerHTML = prev.innerHTML + '!';
}

function block25() {
  const elem = document.getElementById('elem25');

  elem.parentElement.style.color = 'red';
}

function block26() {
  const elem = document.getElementById('elem26');

  elem.parentElement.parentElement.style.color = 'red';
}

function block27() {
  const parent = document.getElementById('parent27');
  const child = document.getElementById('child27');

  parent.removeChild(child);
}

function block28() {
  const parent = document.getElementById('parent28');

  parent.removeChild(parent.lastElementChild);
}

function block29() {
  this.parentElement.removeChild(this);
}

function block30() {
  const elems = document.querySelectorAll('#elem30 li');

  function remove() {
    this.parentElement.removeChild(this);
  }

  for (let i = 0; i < elems.length; i += 1) {
    elems[i].addEventListener('click', remove);
  }
}

function block31() {
  const input = document.getElementById('input31');
  let clone = input.cloneNode(true);

  input.parentElement.appendChild(clone);
}


window.addEventListener('load', () => {
  let element;

  for (let id = 1; id <= 31; id += 1) {
    if (id === 10) {
      for (let i = 1; i <= 3; i += 1) {
        element = window.document.getElementById(`button${id}-${i}`);
        element.addEventListener('click', window[`block${id}`]);
      }
    } else if (id !== 30) {
      element = window.document.getElementById(`button${id}`);
      element.addEventListener('click', window[`block${id}`]);
    }
  }
  block30();

});
