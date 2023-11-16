let listaPacientes = []
let menu = "3"

do {

    let pacientes = ""
    for (let i = 0; i < listaPacientes.length; i++) {
        pacientes += (`${i + 1}° - ${listaPacientes[i]}, `)
    }

    menu = prompt(`Olá, aqui está a lista de pacientes: ${pacientes}
    
O que você gostaria de fazer?
1) Novo paciente
2) Consultar paciente
3)Sair`)
    switch (menu) {
        case "1":
            nomePaciente = prompt("Qual o nome do novo paciente?")
            listaPacientes.push(nomePaciente)
            break;
        case "2":
            if (listaPacientes.length == 0) {
                alert("Não há pacientes a serem atendidos!")
            } else {
                alert(`Consultando o paciente ${listaPacientes[0]}`)
                listaPacientes.shift()
            }
            break;
        case "3":
            alert("você optou por sair")
            alert("saindo...")
            break;
        default:
            alert("escolha uma opção válida")
    }
} while (menu !== "3")
