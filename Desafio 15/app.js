var dia = Number(window.prompt('Quantos dias ficou com o carro?'))
var km = Number(window.prompt('Quantos KM foram rodados com o carro?'))
document.write(`O preços são: </br>Pelos dias: R$${dia * 60}</br>`)
document.write(`Pelos KM rodados: R$${km * 0.15}</br>`)
document.write(`O total foi de R$${(dia * 60) + (km * 0.15)}`)