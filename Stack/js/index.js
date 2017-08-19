/**
 * Create new 'ul' element
 * @param {object} parent
 * @returns {Element}
 */
function createUl(parent) {
  const ul = document.createElement('ul');
  const line = document.createElement('hr');

  parent.appendChild(ul);
  parent.appendChild(line);

  return ul;
}

/**
 * Show stack
 * @param {array} arr
 */
function stack(arr) {
  const parent = document.getElementById('stack');
  const ul = createUl(parent);
  const count = arr.length;
  let li;

  for (let id = 0; id < count; id += 1) {
    li = document.createElement('li');
    li.innerHTML = arr.pop();
    ul.appendChild(li);
  }
}

/**
 * Show queue
 * @param {array} arr
 */
function queue(arr) {
  const parent = document.getElementById('queue');
  const ul = createUl(parent);
  const count = arr.length;
  let li;

  for (let id = 0; id < count; id += 1) {
    li = document.createElement('li');
    li.innerHTML = arr.shift();
    ul.appendChild(li);
  }
}

/**
 * Push values to array
 * @param {string} func
 */
function push(func) {
  const values = document.getElementById('values');
  let arr = [];

  for (let el = 0; el < values.children.length; el += 1) {
    if (values.children[el].value !== '') {
      arr.push(values.children[el].value);
    }
  }
  func(arr);
}

/**
 * Add new input
 */
function add() {
  const values = document.getElementById('values');
  const button = document.getElementById('add');
  const child = document.createElement('input');

  values.insertBefore(child, button);
}

/**
 * Create 'load' event
 */
window.addEventListener('load', () => {
  document.getElementById('add').addEventListener('click', add);
  document.getElementById('stackButton').addEventListener('click', () => {
    push(stack);
  });
  document.getElementById('queueButton').addEventListener('click', () => {
    push(queue);
  });
});