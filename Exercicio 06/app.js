function calcular() {
    var num = parseFloat(document.getElementById('num').value);
    var d = document.getElementById('resultado');
    d.style.whiteSpace = 'pre-line'
    d.innerHTML = `
    ${num}ºC
    ${(num * 9/5) + 32}ºF
    ${num + 273.15}ºK
    `
}