const data = require('./database')

//verificar se o personagem possui poder ou nao, se tem poder, acrescentar a propriedade isFighter

function isFighter(){
    data.characters.forEach((character) =>{
        if(character.powers.length === 0){
            character.isFighter = false
        }else{
            character.isFighter = true
        }
    })
    return data.characters
}

console.log(isFighter())