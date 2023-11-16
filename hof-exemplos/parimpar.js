const numeros = [0,1,2,3,4,5];

let parImpar = numeros.forEach((numero) =>{
    if(numero % 2 === 0){
        return (`${numero} é par`)
    }else{
        return (`${numero} é impar`)
    }
})

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar