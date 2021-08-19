var produto = Number(window.prompt('Qual o valor do produto? '))
var desconto = Number(window.prompt('Qual a % do desconto? '))
document.write(`O novo preço do produto será de ${produto - (produto * (desconto / 100))}`)