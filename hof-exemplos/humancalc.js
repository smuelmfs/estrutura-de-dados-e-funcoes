function calcularAreaTotal(dimensoes) {
    const areaTotal = dimensoes.reduce((prev, curr) => {
        const area = curr.altura * curr.comprimento
        return prev + area
    }, 0)
    return areaTotal
}

const dimensoes = [
    { altura: 10, comprimento: 20 },
    { altura: 2, comprimento: 4 },
    { altura: 1, comprimento: 1 },
    { altura: 50, comprimento: 50 }
]

const areaTotal = calcularAreaTotal(dimensoes)

console.log(areaTotal)