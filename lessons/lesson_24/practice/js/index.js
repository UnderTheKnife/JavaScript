"use strict";
/*global document: false */

/*global window: false */

function block1() {
  const arr = [1, 2, 3];
  let ul = document.createElement('ul');
  let li;

  for (let i = 0; i < arr.length; i += 1) {
    li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }

  document.body.appendChild(ul);
}

function block2() {
  let parent = this.parentElement;
  let newInput;

  newInput = document.createElement('input');
  parent.appendChild(newInput);
}

function block3() {
  const input = document.getElementById('id3');
  let digits;
  let parent;
  let newInput;

  digits = this.value.split('');
  parent = input.parentElement;

  for (let i = 0; i < digits.length; i += 1) {
    newInput = document.createElement('input');
    newInput.value = digits[i];
    parent.appendChild(newInput);
  }

}

function block4() {
  this.parentElement.style.display = 'none';
}

window.addEventListener('load', () => {
  document.getElementById('id1').addEventListener('click', block1);
  document.getElementById('id2').addEventListener('click', block2);
  document.getElementById('id3').addEventListener('blur', block3);
  document.getElementById('id4').addEventListener('click', block4);
});