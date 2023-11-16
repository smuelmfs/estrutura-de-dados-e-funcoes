const data = require('./database')

//contar a quantidade de personagens através do gênero

function contGender(gender) {
    if (gender === 'M' || gender === 'F') {
        return data.characters.filter((character) => {
            return character.gender === gender
        }).length
    }else{
        return 'valor inválido'
    }
}

console.log(contGender('M'))