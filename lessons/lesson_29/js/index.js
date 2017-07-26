"use strict";
/*global window: false */

function block1() {
    var form = window.document.getElementById('form1'),
        sum = 0,
        inputValue,
        input,
        i;
    for (i = 0; i < form.children.length - 1; i += 1) {
        input = parseInt(form.children[i].value, 10);
        if (isNaN(input)) {
            inputValue = 0;
        } else {
            inputValue = input;
        }
        sum += inputValue;
    }
    window.alert('Сумма : ' + sum);
}

function block2() {
    var form = window.document.getElementsByClassName('form2'),
        sum = 0,
        inputValue,
        input,
        i,
        j;
    for (i = 0; i < form.length; i += 1) {
        for (j = 0; j < form[i].children.length; j += 1) {
            input = parseInt(form[i].children[j].value, 10);
            if (isNaN(input)) {
                inputValue = 0;
            } else {
                inputValue = input;
            }
            sum += inputValue;
        }
    }
    window.alert('Сумма : ' + sum);
}

function block3() {
    var select = window.document.getElementById('select3'),
        input = window.document.getElementById('input3'),
        option = select.selectedIndex;
    input.value = select.options[option].innerHTML;
}

function block4() {
    var select = window.document.getElementById('select4'),
        input = window.document.getElementById('input4');
    select.selectedIndex = parseInt(input.value, 10);
}

var countries = {
    'Select country' : [],
    'Ukraine' : [
        'Kiev',
        'Lviv',
        'Odessa',
        'Cherkasy'
    ],
    'USA' : [
        'New York City',
        'San Francisco',
        'Los Angeles',
        'Chikago'
    ],
    'Japan' : [
        'Tokyo',
        'Kyoto',
        'Hiroshima',
        'Kawasaki'
    ]
};
function add(value) {
    var option = window.document.createElement('option');
    option.value = value;
    option.innerHTML = value;
    return option;
}

function city() {
    var parent = window.document.getElementById('block5'),
        select = window.document.getElementById('cities');
    if (this.selectedIndex === 0 && select !== null) {
        select.parentNode.removeChild(select);
    } else {

        if (select === null) {
            select = window.document.createElement('select');
            select.id = 'cities';
            parent.appendChild(select);
        } else {
            while (select.firstChild) {
                select.removeChild(select.firstChild);
            }
        }
        countries[this.value].forEach(function (city) {
            select.appendChild(add(city));

        });
    }
}

function country() {
    var parent = window.document.getElementById('block5'),
        select = window.document.getElementById('countries'),
        key;
    if (select === null) {
        select = window.document.createElement('select');
        select.id = 'countries';
        for (key in countries) {
            if (countries.hasOwnProperty(key)) {
                select.appendChild(add(key));
            }
        }
        select.addEventListener('change', city);
        parent.appendChild(select);
    }
}

window.addEventListener('load', country);