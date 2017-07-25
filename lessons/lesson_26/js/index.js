function block1() {
    alert(window.document.documentElement.clientHeight);
}

function block2() {
    var height = window.innerHeight;
    window.scrollBy(0, height);
}

function block3() {
    alert('Текущая прокрутка сверху: ' + window.pageYOffset )
}
