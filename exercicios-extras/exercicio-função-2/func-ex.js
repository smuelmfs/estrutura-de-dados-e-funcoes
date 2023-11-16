
function desacelerar(velocidade, mostrar) {
    let desacelerando = 20
    while (velocidade > 0) {
        mostrar(velocidade)
        velocidade -= desacelerando
    }
    if (velocidade < 0) {
        alert("Nave parada, abrindo comportas...")
    }
}

desacelerar(150, (velocidade) => alert(`velocidade atual ${velocidade}`))

// let velocity = 150

// function slowDown() {
//     let slowVelocity = 20

//     while (velocity > 0) {
//         velocity -= slowVelocity
//         alert(`velocidade igual a ${velocity}`)
//     }

//     alert("nave parada, abrindo comportas")

// }

// slowDown()