const nomeTurista = prompt("Qual o seu nome, turista?")
let pergunta = prompt("você ja visitou alguma cidade?(s/n)")

let cidades = []
let contagem = 0

while(pergunta !== "n"){
    let nomeCidade = prompt("qual o nome da cidade?")
    cidades += nomeCidade + ", "
    contagem++
    pergunta = prompt("você visitou alguma outra cidade?")
}
alert(`O ${nomeTurista} visitou ${contagem} cidades, sendo elas ${cidades}`)