function init() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    if (nome === '' && idade === '') {
        document.getElementById('escrever').innerText = 'Preencha ambos os espaços, por favor!'
    }
    else {
        document.getElementById('escrever').innerText = `Olá ${nome}, agora sei que tens ${idade} anos, muito obrigado!`;
    }   
}