const nomeDaNave = prompt('Qual o nome da Nave?')
let velocidade = 0

function acelerar() {
    velocidade += 5
    return "acelerando a nave em 5km"
}

function desacelerar() {
    velocidade -= 5
    if (velocidade < 0) {
        return "A velocidade chegou a 0km"
    } else {
        return "Desacelerando a nave em 5km"
    }
}

function dadosDeBordo() {
    if(velocidade <= 0){
        return `A nave ${nomeDaNave} está parada`
    }
    return `A nave ${nomeDaNave} está a uma velocidade de ${velocidade}km`
}

function execMenu() {
    return prompt(`Olá, escolha uma das opções para a nave ${nomeDaNave}:
    1) Acelerar a nave em 5km
    2) Desacelerar em 5km
    3) Imprimir dados de bordo
    4) Sair`)
}

function exec() {
    menu = "4"
    do {
        menu = execMenu()

        switch (menu) {
            case "1":
                alert(acelerar())
                break;
            case "2":
                alert(desacelerar())
                break;
            case "3":
                alert(dadosDeBordo())
                break;
            case "4":
                alert("Saindo...")
                break;
            default:
                alert("Escolha uma opção válida")
        }

    } while (menu !== "4")
}
exec()
