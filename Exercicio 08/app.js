function calcular() {
    var dsct = Number(document.getElementById('desconto').value)
    var num = Number(document.getElementById('num').value)
    var nome = document.getElementById('nome').value
    var d = document.getElementById('resposta1')
    d.innerHTML = `Calculando desconto de 10% para <strong>${nome}</strong>`
    var d = document.getElementById('resposta2')
    d.innerHTML = `
    O preço original era de R$${num}.<br>
    Você acaba de ganhar R$${num * (dsct / 100)} de desconto (-${dsct}%).<br>
    No fum, você pagará R$${num - (num * (dsct / 100))} no produto ${nome}
    `
}