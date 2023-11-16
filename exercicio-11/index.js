const vagas = []

function listarVagas() {
    if (vagas.length === 0) {
        alert('Não há vagas disponíveis')
    } else {
        alert('Vagas Disponíveis')

        vagas.forEach((vaga, i) => {
            return alert(
                `Índice: ${i}
                Nome:${vaga.nome}
                Descrição:${vaga.descricao}
                Data Limite:${vaga.data}
                Quantidade de candidatos:${vaga.candidatos.length}`)
        })
    }
}

function criarVaga() {
    const nome = prompt('Qual o nome da vaga?')
    const descricao = prompt('Qual a descrição da vaga?')
    const data = prompt('Qual a data limite da vaga?')

    const confirmacao = confirm(`
    Confirme os dados:
    Nome da vaga: ${nome}
    Descrição: ${descricao}
    Data Limite: ${data}`)

    if (confirmacao) {
        vagas.push({
            nome,
            descricao,
            data,
            candidatos: []
        })
        return alert(`Vaga ${nome} criada com sucesso!`)
    } else {
        return alert('Ocorreu um erro')
    }
}

function visualizarVaga() {
    const i = parseInt(prompt('Qual o indice da vaga?'))

    if (isNaN(i) || i < 0 || i >= vagas.length) {
        return alert('Índice inválido')
    }

    const vaga = vagas[i]

    alert(`
    Índice: ${i}
    Nome:${vaga.nome}
    Descrição:${vaga.descricao}
    Data Limite:${vaga.data}
    Quantidade de candidatos:${vaga.candidatos.length}
    Candidatos:
    `)

    vaga.candidatos.forEach((candidato) => {
        return alert(`- ${candidato}`)
    })
}

function inscreverCandidato() {
    const nomeCandidato = prompt('Qual o nome do candidato?')

    const i = parseInt(prompt('Digite o índice da vaga:'))

    if (isNaN(i) || i < 0 || i >= vagas.length) {
        return alert('Índice inválido')
    }


    const vaga = vagas[i]

    const confirmacao = confirm(`Confirme os dados:
    Nome do candidato: ${nomeCandidato}
    Nome da Vaga: ${vaga.nome}`)

    if (confirmacao) {
        vaga.candidatos.push(nomeCandidato)
        return alert('Candidato inscrito com sucesso')
    } else {
        return alert('Ocorreu um erro')
    }
}

function excluirVaga() {
    const i = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[i]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + i + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.data
    )

    if (confirmacao) {
        vagas.splice(i, 1)
        alert("Vaga excluída.")
    }
}

function execMenu() {
    return prompt(`Olá, escolha uma opção:
    1) Listar vagas
    2) Criar nova vaga
    3) Visualizar uma vaga
    4) Inscrever Candidato
    5) Excluir vaga
    6) Sair`)
}

function exec() {
    let menu = "6"

    do {
        menu = execMenu()
        switch (menu) {
            case "1":
                listarVagas()
                break;
            case "2":
                criarVaga()
                break;
            case "3":
                visualizarVaga()
                break;
            case "4":
                inscreverCandidato()
                break;
            case "5":
                excluirVaga()
                break;
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Escolha uma opção válida")
        }
    } while (menu !== "6")
}

exec()

