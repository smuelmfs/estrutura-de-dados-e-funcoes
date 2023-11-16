function aprovados(lista) {
    const somenteAprovados = lista.filter((aluno) => {
        return aluno.media >= 6.0
    })
    return somenteAprovados
}

const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
]

const alunosAprovados = aprovados(alunos)

console.log(alunosAprovados)