function calcular() {
    var num = parseFloat(document.getElementById('num').value);
    var d1 = document.getElementById('resposta1');
    var d2 = document.getElementById('resposta2');
    d1.innerHTML = `A distãncia de ${num} metros, corresponde a...`
    d2.style.whiteSpace = 'pre-line'
    d2.innerHTML = `
    ${num / 1000} quilômetros (Km)
    ${num / 100} hectômetros (Hm)
    ${num / 10} decâmetros (Dam)
    ${num * 10} decímetros (dm)
    ${num * 100} centímetros (cm)
    ${num * 1000} milímetros (mm)
    `
}