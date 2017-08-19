function search() {
  const string = window.document.getElementById('string').value;
  const result = window.document.getElementById('result');
  let chars = {};
  let red;
  let green;
  let values;
  let span;

  /**
   * remove children
   */
  while (result.children.length > 0){
    result.removeChild(result.children[0]);
  }

  /**
   * chars count
   */
  for (let i = 0; i < string.length; i += 1){
    if (string[i] === ' ' || string[i] === ',') {
      continue;
    }
    if (!chars[string[i]]) {
      chars[string[i]] = 0;
    }

    chars[string[i]] += 1;
  }

  values = Object.values(chars);
  red = Math.min.apply(null, values);
  green = Math.max.apply(null, values);

  /**
   * 'span' create
   */
  for (let i = 0; i < string.length; i += 1){
    span = window.document.createElement('span');
    span.innerHTML = string[i];

    if (chars[string[i]] === green ){
      span.style.textDecoration = 'underline';
      span.style.textDecorationColor = '#088000'

    }

    if (chars[string[i]] === red) {
      span.style.textDecoration = 'underline';
      span.style.textDecorationColor = '#ff0000'
    }

    result.appendChild(span);
  }
}

window.addEventListener('load', () => {
  window.document.getElementById('search').addEventListener('click', search);
});