function clonar(obj){
    const ovelhasCopia = {}

    const propriedades = Object.getOwnPropertyNames(obj)

    propriedades.forEach((propriedade) => {
        ovelhasCopia[propriedade] = obj[propriedade]
    })

    return ovelhasCopia

}


const ovelhasOriginal = {
    nome: "ovelhinha",
    cor: "branca",
}

const clonarOvelhas = clonar(ovelhasOriginal)
console.log(clonarOvelhas)