const numero = prompt("digite um numero para calcularmos sua tabuada:")

let resultado = []

for (let i = 1; i <= 20; i++) {
    resultado += (`${numero} * ${i} = ${numero * i}
    `)
}
alert(`resultado da tabuada do ${numero}: 
    ${resultado}`)

