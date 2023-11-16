const navesEspaciais = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let maisDeNove = navesEspaciais.filter((naveEspacial) => naveEspacial[1] > 9).map((naveEspacial) => naveEspacial[0])

let engatePendente = navesEspaciais.findIndex((naveEspacial) => naveEspacial[2] === false)

let naveMaiuscula = navesEspaciais.map((naveEspacial)=> naveEspacial[0].toUpperCase())

let mensagem = `Espaçonaves com mais de 9 tripulantes: ${maisDeNove}
Espaçonaves com engate pendente: ${engatePendente}
Espaçonaves com letra maiúscula: ${naveMaiuscula}`

console.log(mensagem)