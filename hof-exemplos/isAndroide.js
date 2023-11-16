const data = require('./database')

// Imprimir se existe algum personagem de determinada esp´recie. True ou False. Caso seja true vai retornar todos os personagens dessa espécie

function isAndroid(specie) {
    let name = []
    if (data.species.some((specieSome) => specieSome.name === specie) === true) {
        let findId = data.species.find((findId) => findId.name === specie)
        
        for (let i = 0; i < data.characters.length; i += 1){
            if(findId.id === data.characters[i].speciesId){
                name.push(data.characters[i].name)
            }
        }
    }else{
        return 'Especie não encontrada'
    }
    return name
}

console.log(isAndroid("Saiyans"))
