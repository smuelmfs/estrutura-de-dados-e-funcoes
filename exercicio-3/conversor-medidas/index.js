const medida = parseFloat(prompt("Olá, digite um valor em metros:"))

unidadeDeMedida = prompt(`Escolha uma unidade de medida:)
1)milímetro
2)centímetro
3)decímetro
4)decâmetro
5)hectômetro
6)quilômetro`)

let resultado

switch (unidadeDeMedida) {
    case "1":
        resultado = medida * 1000;
        alert(`o valor de ${medida} metros em milímetros é igual a ${resultado}`)
        break;
    case "2":
        resultado = medida * 100;
        alert(`o valor de ${medida} metros em centímetros é igual a ${resultado}`)
        break;
    case "3":
        resultado = medida * 10;
        alert(`o valor de ${medida} metros em decímetros é igual a ${resultado}`)
        break;
    case "4":
        resultado = medida / 10;
        alert(`o valor de ${medida} metros em decâmetros é igual a ${resultado}`)
        break;
    case "5":
        resultado = medida / 100;
        alert(`o valor de ${medida} metros em hectômetros é igual a ${resultado}`)
        break;
    case "6":
        resultado = medida / 1000;
        alert(`o valor de ${medida} metros em quilômetros é igual a ${resultado}`)
        break;
    default:
        alert("digite uma opção válida")
}