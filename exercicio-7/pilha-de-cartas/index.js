let baralhoDeCartas = []
let menu = "3"

do {
    menu = prompt(`Você tem ${baralhoDeCartas.length} no baralho.

Escolha uma opção:
1) Adicionar uma carta
2) Puxar uma carta
3) Sair`)

    switch (menu) {
        case "1":
            alert("Você escolheu adicionar uma carta...")
            novaCarta = prompt("Qual o nome da carta?")
            baralhoDeCartas.unshift(novaCarta)
            break;
        case "2":
            if (baralhoDeCartas.length == 0) {
                alert("Não há cartas no baralho!")
            } else {
                alert(`Você pegou a carta ${baralhoDeCartas[0]}`)
                baralhoDeCartas.shift()
            }
            break;
        case "3":
            alert("Você optou em sair")
            alert('Saindo')
            break;
        default:
            alert("Escolha uma opção válida")
    }
} while (menu !== "3")
