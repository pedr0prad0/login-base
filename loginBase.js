var nomeCerto = "Pedro Prado"
var emailCerto = "pedrohvp2004@gmail.com"
var senhaCerta = "12345678"

function pegarDados() {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if (nome === nomeCerto & email === emailCerto & senha === senhaCerta) {
        alert("Olá " + nome + ". Login efetuado com sucesso")
    }
    else {
        alert("Credeniais inválidas, tente novamente")
    }
}