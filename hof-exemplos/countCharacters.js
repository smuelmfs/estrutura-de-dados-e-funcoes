const data = require('./database')

// criar uma função que mostre a quantidade de personagens

function countCharacters(){
    return data.characters.length
}

console.log(countCharacters())