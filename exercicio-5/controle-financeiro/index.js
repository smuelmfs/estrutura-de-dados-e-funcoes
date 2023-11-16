let quantidadeDinheiro = 0
let opcoes = "3"

do {
    opcoes = prompt(`olá! você possui ${quantidadeDinheiro}R$,
escolha uma opção:
1- adicionar dinheiro
2- retirar dinheiro
3- sair`)

    switch (opcoes) {
        case "1":
            let adicionarDinheiro = parseFloat(prompt("qual a quantia você quer adicionar?"))
            quantidadeDinheiro += adicionarDinheiro
            alert(`você adicionou ${adicionarDinheiro}R$`)
            break;
        case "2":
            let retirarDinheiro = parseFloat(prompt("qual a quantia você quer retirar?"))
            if (retirarDinheiro > quantidadeDinheiro) {
                alert("você não pode retirar o que não tem!")
            } else {
                quantidadeDinheiro -= retirarDinheiro
                alert(`você retirou ${retirarDinheiro}R$`)
                break;
            }
        case "3":
            alert("você optou por sair")
            alert("saindo...")
            break;
        default:
            alert("escolha uma opção válida")
    }

} while (opcoes !== "3")
