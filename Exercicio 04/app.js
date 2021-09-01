function calcular() {
    var nome = document.getElementById('nome').value;
    var preco = parseFloat(document.getElementById('preco').value);
    var nota = parseFloat(document.getElementById('nota').value);
    var d = document.getElementById('resultado');
    d.innerHTML = `Você comprou ${nome} que custou ${preco}.<br>
    Deu ${nota} em dinheiro e vai receber ${nota - preco} de troco.<br>
    Volte Sempre!`;
}