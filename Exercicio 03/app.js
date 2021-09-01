function mostrar() {
    var num = Number(document.getElementById('num').value);
    var d = document.getElementById('resultado')
    d.innerHTML = `Número: ${num}<br>Antecessor: ${num - 1}<br>Sucessor: ${num + 1}`
}