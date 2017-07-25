function showLi() {
    this.innerHTML += '!';
}


function onload(){
    var ul = document.getElementById('elem1');
    for (var i = 0; i < ul.children.length; i++) {
        ul.children[i].addEventListener('click', showLi);
    }
}

function add() {

    var ul = document.getElementById('elem1'),
        li = document.createElement('li');
    li.innerHTML = 'пункт';
    li.addEventListener('click', showLi);
    ul.appendChild(li);
}

