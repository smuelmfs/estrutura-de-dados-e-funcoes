function filtrarPorValorMinimo(array,string,number){

    const resultFiltrado = array.filter((objeto) => {
        return objeto[string] >= number
    })

    return resultFiltrado

}

const pessoas = [
    {nome:"diego", idade:22}, 
    {nome:"luana", idade:44},
    {nome:"antonio", idade:74}
]

const resultFiltrado = filtrarPorValorMinimo(pessoas,"idade", 74)

console.log(resultFiltrado)