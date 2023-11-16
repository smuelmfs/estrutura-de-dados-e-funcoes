const personagemAtaque = prompt("Qual será o nome do seu guerreiro?")
let poderDeAtaque = parseFloat(prompt(`Quantos de poder de ataque do ${personagemAtaque} tem?`))

const personagemDefesa = prompt("Qual o nome do outro guerreiro")
let pontosDeVida = parseFloat(prompt(`Quantos pontos de vida o ${personagemDefesa} tem?`))

let pontosDeDefesa = parseFloat(prompt(`Quantos pontos de defesa o ${personagemDefesa} tem?`))
const escudo = prompt(`O ${personagemDefesa} possui escudo?(s/n)`)

let dano = 0

if(poderDeAtaque > pontosDeDefesa && escudo === "n"){
dano = poderDeAtaque - pontosDeDefesa
}else if(poderDeAtaque > pontosDeDefesa && escudo === "s"){
    dano = (poderDeAtaque - pontosDeDefesa)/2
}

pontosDeVida -= dano

alert(`${personagemAtaque} causou ${dano} de dano no ${personagemDefesa}`)

alert(`${personagemAtaque} tem o poder de ataque igual a ${poderDeAtaque}
${personagemDefesa} tem vida igual a ${pontosDeVida} e possui ${pontosDeDefesa} pontos de defesa e ${escudo} para escudos`)





