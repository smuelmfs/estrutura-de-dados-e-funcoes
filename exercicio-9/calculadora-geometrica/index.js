function areaTriangulo() {
    const base = prompt("Qual o valor da base do triângulo?")
    const altura = prompt("Qual o valor da altura do triângulo?")
    return base * altura / 2
}
function areaRetangulo() {
    const base = prompt("Qual o valor da base do retângulo?")
    const altura = prompt("Qual o valor da altura do retângulo?")
    return base * altura
}
function areaQuadrado() {
    const lado = prompt("Qual o valor do lado do quadrado?")
    return Math.pow(lado,2)
}
function areaTrapezio() {
    baseMaior = parseFloat(prompt("Qual o valor da base maior?"))
    baseMenor = parseFloat(prompt("Qual o valor da base menor?"))
    altura = prompt("Qual o valor da altura do trapézio?")
    return (baseMaior + baseMenor) * altura / 2
}
function areaCirculo() {
    raio = prompt("qual o valor do raio do círculo?")
    const pi = 3.14
    return pi * Math.pow(raio,2)
}
function execMenu(){
    return prompt(`Olá, escolha uma opção para ser calculada:
    1)Área do triângulo
    2)Área do retângulo
    3)Área do quadrado
    4)Área do trapézio
    5)Área do círculo
    6)Sair`)
}

function exec() {
    let menu = "6"
    do {
        menu = execMenu()

        switch (menu) {
            case "1":
                alert(`A área do triângulo é igual a ${areaTriangulo()}`)
                break;
            case "2":
                alert(`A área do retângulo é igual a ${areaRetangulo()}`)
                break;
            case "3":
                alert(`A área do quadrado é igual a ${areaQuadrado()}`)
                break;
            case "4":
                alert(`A área do trapézio é igual a ${areaTrapezio()}`)
                break;
            case "5":
                alert(`A área do círculo é igual a ${areaCirculo()}`)
                break;
            case "6":
                alert("Saindo...")
                break;
            default:
                alert("Escolha uma opção válida")
        }
    } while (menu !== "6")
}

exec()