const imoveis = []
let menu = "3"

do {
    menu = prompt(`quantidade de imóveis cadastrados é igual a: ${imoveis.length}

Escolha uma opção:
1) Salvar um Imóvel
2) Mostrar todos os imóveis salvos
3) Sair
`)
    switch (menu) {
        case "1":
            const imoveisCadastrados = {}
            imoveisCadastrados.proprietario = prompt("Qual o nome do proprietário?")
            imoveisCadastrados.quartos = prompt("Qual a quantidade de quartos?")
            imoveisCadastrados.banheiro = prompt("Qual a quantidade de banheiros?")
            imoveisCadastrados.garagem = prompt("O imóvel possui garagem?s/n")
            const confirmacao = confirm(`Deseja salvar este imóvel?:
            Proprietário = ${imoveisCadastrados.proprietario}
            Quartos = ${imoveisCadastrados.quartos}
            Banheiro = ${imoveisCadastrados.banheiro}
            Garagem = ${imoveisCadastrados.garagem}`)

            if (confirmacao) {
                imoveis.push(imoveisCadastrados)
            }
            break;
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(`Imóvel ${i + 1}
                Proprietário: ${imoveis[i].proprietario}
                Quartos: ${imoveis[i].quartos}
                Banheiros: ${imoveis[i].banheiro}
                Garagem: ${imoveis[i].garagem}`)
            }
            break;
        case "3":
            alert("saindo...")
            break;
        default:
            alert("escolha uma opção válida")
    }

} while (menu !== "3")



