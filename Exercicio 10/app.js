function calcular() {
    var a = Number(document.getElementById('a').value)
    var b = Number(document.getElementById('b').value)
    var c = Number(document.getElementById('c').value)
    var d = document.getElementById('resp1')
    d.innerHTML = `Resolvendo Bhaskara`
    var d = document.getElementById('resp2')
    var x1 = ((-b) + (b ** 2 -4 * a * c)) / 2
    var x2 = ((-b) - (b ** 2 -4 * a * c)) / 2
    d.innerHTML = `
    A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong><br>
    O valor de x' e x" são: <span class="green">${x1}</span> e <span class="green">${x2}</span>
    `
}