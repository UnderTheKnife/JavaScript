/**
 *
 * @param {object} parent
 * @returns {Element}
 */
function createUl(parent) {
  let ul = window.document.createElement('ul');
  let line = window.document.createElement('hr');

  line.style.margin = '5px';

  parent.appendChild(ul);
  parent.appendChild(line);

  return ul;
}

/**
 *
 * @param arr
 */
function stack(arr) {
  const parent = window.document.getElementById('stack');
  let ul = createUl(parent);
  let count = arr.length;
  let li;

  for (let id = 0; id < count; id += 1) {
    li = window.document.createElement('li');
    li.innerHTML = arr.pop();
    ul.appendChild(li);
  }

}

/**
 *
 * @param arr
 */
function queue(arr) {
  const parent = window.document.getElementById('queue');
  let ul = createUl(parent);
  let count = arr.length;
  let li;

  for (let id = 0; id < count; id += 1) {
    li = window.document.createElement('li');
    li.innerHTML = arr.shift();
    ul.appendChild(li);
  }

}

/**
 *
 * @param {string} func
 */
function push(func) {
  const values = window.document.getElementById('values');
  let arr = [];

  for (let el = 0; el < values.children.length; el += 1) {
    if (values.children[el].value !== '') {
      arr.push(values.children[el].value);
    }
  }

  window[func](arr);
}

/**
 *
 */
function add() {
  const values = window.document.getElementById('values');
  const button = window.document.getElementById('add');
  let child = window.document.createElement('input');

  values.insertBefore(child, button);
}

window.addEventListener('load', () => {
  window.document.getElementById('add').addEventListener('click', add);
  window.document.getElementById('stackButton').addEventListener('click', () => {
    push('stack');
  });
  window.document.getElementById('queueButton').addEventListener('click', () => {
    push('queue');
  });
});