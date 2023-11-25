function lote() {
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var f = calculateFactorial(a);
    var g = calculateFactorial(b);
    var p = a - b;
    var h = calculateFactorial(p);
    var z = f / (g * h);
    document.getElementById("res").innerHTML = z;
}
function calculateFactorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

