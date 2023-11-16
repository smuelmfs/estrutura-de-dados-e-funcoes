
function dobrar(array){
arrayDobrado = array.map((numero) => numero*2)
return arrayDobrado
}

const numeros = [1,2,3,4,5,6,7,8,9]

const numerosDobrados = dobrar(numeros)

console.log(numerosDobrados)
