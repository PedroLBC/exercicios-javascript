function euro() {
    var num = Number(document.getElementById('real').value);
    var d = document.getElementById('resultado');
    d.innerHTML = `${num} em euro é ${num * 6.15}`
}
function dolar() {
    var num = Number(document.getElementById('real').value);
    var d = document.getElementById('resultado');
    d.innerHTML = `${num} em dolar é ${num * 5.18}`
}