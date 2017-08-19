"use strict";

/*global window: false */

function showLi() {
  this.innerHTML += '!';
}


function onload() {
  const ul = window.document.getElementById('elem1');

  for (let i = 0; i < ul.children.length; i += 1) {
    ul.children[i].addEventListener('click', showLi);
  }

}

function add() {
  const ul = window.document.getElementById('elem1');
  let li = window.document.createElement('li');

  li.innerHTML = 'пункт';
  li.addEventListener('click', showLi);
  ul.appendChild(li);
}

window.addEventListener('load', () => {
  onload();
  window.document.getElementById('button1').addEventListener('click', add);
});
