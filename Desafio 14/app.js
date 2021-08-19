var celsius = Number(window.prompt('Qual a temperacura em Graus Celsius?'))
document.write(`A msm temperatura convertida para: </br>`)
document.write(`Kelvin: ${celsius + 273.15}</br>`)
document.write(`Fahrenheit: ${(celsius * 9 / 5) + 32}`)