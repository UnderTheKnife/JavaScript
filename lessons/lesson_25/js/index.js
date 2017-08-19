'use strict';

/*global window: false */

function onload() {
  const header = window.window.document.getElementById('header');
  const main = window.document.getElementById('main');

  main.style.marginTop = header.offsetHeight + 'px';
}

function block1() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.clientTop);
}

function block2() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.clientLeft);
}

function block3() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.offsetWidth);
}

function block4() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.offsetHeight);
}

function block5() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.clientWidth);
}

function block6() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.clientHeight);
}

function block7() {
  const elem = window.document.getElementById('elem');
  const style = window.getComputedStyle(elem);

  window.alert(`Ширина : ${style.width}; Высота : ${style.height}`);
}

function block8() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.scrollTop);
}

function block9() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.scrollLeft);
}

function block10() {
  const elem = window.document.getElementById('elem');

  elem.scrollTop = 100;
}

function block11() {
  const elem = window.document.getElementById('elem');

  elem.scrollTop += 100;
}

function block12() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.scrollHeight);
}

function block13() {
  const elem = window.document.getElementById('elem');

  window.alert(elem.scrollWidth);
}

function block14() {
  const elem = window.document.getElementById('elem');

  elem.scrollTop = elem.scrollHeight - 100;
}

function block15() {
  window.alert(window.pageYOffset);
}

function block16() {
  window.alert(window.pageXOffset);
}

function block17() {
  window.scrollTo(300, 500);
}

function block18() {
  window.scrollBy(0, 300);
}

function block19() {
  window.scrollTo(0, window.document.body.clientHeight);
}

function block20() {
  window.scrollBy(0, 400);
}

function block21() {
  const body = window.document.documentElement;

  if (body.scrollHeight - window.pageYOffset === body.clientHeight) {
    window.scrollTo(0, 100);
  }
}

function block22() {
  const elem = window.document.getElementById('elem');
  let width = elem.offsetWidth;
  let height = elem.offsetHeight;

  elem.style.width = width * 2 + 'px';
  elem.style.height = height * 2 + 'px';
  onload();
}

window.addEventListener('load', () => {
  let element;

  onload();

  for (let id = 1; id <= 22; id += 1 ){
    element = window.document.getElementById(`button${id}`);
    element.addEventListener('click', window[`block${id}`]);
  }

});

