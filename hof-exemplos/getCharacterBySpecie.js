const data = require('./database')

// Mostrar o primeiro personagem de acordo com o id da espécie

function getCharacterBySpecie(id){
return data.characters.find((specie) =>{
    return specie.speciesId === id
})
}

console.log(getCharacterBySpecie(4))