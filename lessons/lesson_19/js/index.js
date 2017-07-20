function go(element) {
  element.value = 'Ой, я поменял текст!';
}

function stop(element) {
  element.value = 'Ой,а теперь еще раз поменял!';
}

function go_12(elem) {
  elem.value = 'О, теперь на меня больше не нажать!';
  elem.disabled = true;
}

function go_13(elem) {
  elem.src = 'img/block_7,2.jpg'
}

function stop_13(elem) {
  elem.src = 'img/block_7,1.jpg'
}

function go_14(){
  elem = document.getElementById('test_14');
  elem.style.color = 'red';
  elem.style.width = '500px';
}

function hide_15(){
  elem = document.getElementById('test_15');
  elem.style.display = 'none';
}
function show_15(){
  elem = document.getElementById('test_15');
  elem.style.display = 'inline-block';
}

function go_16(){
  elem = document.getElementById('test_16');
  elem.value = 'Ой, я поменял свой текст и css!';
  elem.style.width = '300px';
  elem.style.height = '50px';
  elem.style.color = 'red';
  elem.style.borderRadius = '10px';
}

function block_17(){
  var block = document.getElementById('block_17');
  var unblock = document.getElementById('unblock_17');
  block.value = 'О, теперь на меня больше не нажать!';
  block.disabled = true;
  unblock.style.display = 'block';
}
function unblock_17(){
  var block = document.getElementById('block_17');
  var unblock = document.getElementById('unblock_17');
  block.value = 'О, на меня снова можно нажимать!';
  block.disabled = false;
  unblock.style.display = 'none';
}

function go_18(elem){
  elem.value = parseInt(elem.value) + 1;
}

function go_19(){
  elem = document.getElementById('test_19');
  elem.value = 'Теперь я плаваю справа!';
  elem.style.cssFloat = 'right';
}

function go_20(){
  elem = document.getElementById('test_20');
  elem.value = 'Мои css классы: '+elem.className;
}

function go_21(){
  var test1 = document.getElementById('test21_1');
  var test2 = document.getElementById('test21_2');
  var tmp = test1.value;
  test1.value = test2.value;
  test2.value = tmp;
}

function go_22(){
  var test = document.getElementById('test_22');
  var value = test.value;
  var result = document.getElementById('result_22');
  result.value =  value*value;
}

function go_23(){
  var test = document.getElementById('test_23');
  var value = test.value;
  if(!isNaN(value)){
    var result = document.getElementById('result_23');
    result.value =  value*value;
  } else {
    alert('Введено не число!')
  }
}

function go_24(elem){
  elem.disabled = true;
  elem.style.cursor = 'not-allowed';
}

function add_25(text){
  var input = document.getElementById('input_25');
  input.value = input.value + text;
}
