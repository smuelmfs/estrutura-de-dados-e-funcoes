let opcoes = "5"

do {
    opcoes = prompt(`Escolha uma das opções:
    1)nada
    2)nada
    3)nada
    4)nada
    5)encerrar`)
    switch(opcoes){
        case "1":
            alert(`a opção escolhida foi um`)
            break;
            case "2":
            alert(`a opção escolhida foi dois`)
            break;
            case "3":
            alert(`a opção escolhida foi três`)
            break;
            case "4":
            alert(`a opção escolhida foi quatro`)
            break;
            case "5":
            alert(`a opção escolhida foi cinco`)
            alert(`encerrando...`)
            break;
            default:
                alert("opção inválida")
    }
    
} while (opcoes !== "5")