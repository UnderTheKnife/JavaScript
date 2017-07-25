function isEmpty(fields) {
    var elem,
        i;
    for (i = 0; i < fields.length; i += 1) {
        elem = window.document.getElementById(fields[i]);
        if (elem.value === '') {
            return true;
        }
    }
    return false;
}

function edit() {
    this.innerHTML = prompt('Edit:',this.innerHTML);
}

function add() {
    var ul = window.document.getElementById('users'),
        tr = window.document.createElement('tr'),
        fields = ['firstName', 'lastName'],
        elem,
        input,
        i;
    if (!isEmpty(fields)) {
        for (i = 0; i < fields.length; i += 1) {
            elem = window.document.createElement('td');
            input = window.document.getElementById(fields[i]);
            elem.innerHTML = input.value;
            input.value = '';
            elem.addEventListener('click', edit);
            tr.appendChild(elem);
        }
    ul.appendChild(tr);
    }
}

