function search() {
    var str = 'abcde';
        str_array = str.split("");
    str_array.forEach(function (element, key) {
        if (element === 'a' || element === 'b' || element ==='e'){
            alert('str[' + key + '] : ' + element);
        }
    })
}
function multiplication() {
    var number = 12345,
        array = number.toString(10).split(""),
        rezult = 1;
    array.forEach(function(element){
        rezult *= element;
    });
    alert(rezult);

}
