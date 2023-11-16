const data = require ('./database')

// para cada personagem imprima uma frase a seguir:
// parte 1: {NOME} é da espécie {ID ESPECIE} 
// parte 2: {NOME} é da espécie {NOME ESPECIE}

function information(){
    return data.characters.map((character)=>{
        const specieName = data.species.find((specie) => specie.id === character.speciesId)
        return `${character.name} é da espécie ${specieName.name}`
    })
}
console.log(information())