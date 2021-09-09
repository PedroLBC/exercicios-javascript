function calcular() {
    var dsct = Number(document.getElementById('aumento').value)
    var num = Number(document.getElementById('num').value)
    var nome = document.getElementById('nome').value
    var d = document.getElementById('resposta1')
    d.innerHTML = `<strong>${nome}</strong> recebeu um aumento salarial!`
    var d = document.getElementById('resposta2')
    d.innerHTML = `
    O salário atual era R$${num}.<br>
    Com o aumento de ${dsct}%, o salário vai aumentar  <span class="green">R$${num * (dsct / 100)}</span> no próximo mês.<br>
    E a partir daí, ${nome} vai passar a ganhar <span class="green">R$${num + (num * (dsct / 100))}</span>
    `
}