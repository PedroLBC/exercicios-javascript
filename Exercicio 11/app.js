function ver() {
    var ano = Number(document.getElementById('ano').value)
    var d = document.getElementById('resp1')
    d.innerHTML = `Analisando o ano de ${ano}...`
    var d = document.getElementById('resp2')
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        d.innerHTML = `O ano de ${ano} <strong id="green">É BISSEXTO</strong>`
    } else {
        d.innerHTML = `O ano de ${ano} <strong id="red">NÃO É BISSEXTO</strong>`
    }
}