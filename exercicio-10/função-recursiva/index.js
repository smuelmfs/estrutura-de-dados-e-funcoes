function fatorial(num) {
    if (num === 0) {
        return 1 //caso base para encerrar a função recursiva
    } else if (num === 1) {
        return 1 //segundo caso base para encerrar a função recursiva
    } else {
        return num * fatorial(num - 1) //calculo para realizar o fatorial de um número
    }
}

console.log(fatorial(2))