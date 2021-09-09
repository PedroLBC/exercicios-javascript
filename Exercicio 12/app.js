function calcular() {
    var antg = Number(document.getElementById('antg').value)
    var novo = Number(document.getElementById('novo').value)
    var d = document.getElementById('resp1')
    d.innerHTML = `Analisando os Valores Informados`
    var d = document.getElementById('resp2')
    if (novo > antg) {
        d.innerHTML = `
        O produto custava ${antg} e agora custa ${novo}.<br>
        Hoje o produto está mais caro.<br>
        O preço subiu R$${novo - antg} em relação ao preço anterior.<br>
        Um aumento de ${((novo - antg) / antg) * 100}%.
        `
    } else {
        d.innerHTML = `
        O produto custava ${antg} e agora custa ${novo}.<br>
        Hoje o produto está mais barato.<br>
        O preço caiu R$${antg - novo} em relação ao preço anterior.<br>
        Uma queda de ${((antg - novo) / antg) * 100}%.
        `
    }
}