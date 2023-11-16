const veiculoUm = prompt("digite o nome do primeiro veículo")
const velocidadeUm = prompt("digite sua respectiva velocidade")

const veiculoDois = prompt("digite o nome do segundo veículo")
const velocidadeDois = prompt("digite sua respectiva velocidade")

if(velocidadeUm > velocidadeDois){
    alert(`o ${veiculoUm} é mais rapido que o ${veiculoDois}`)
}else if(velocidadeDois > velocidadeUm){
    alert(`o ${veiculoDois} é mais rapido que o ${veiculoUm}`)
}else{
    alert("a velocidade entre os dois veículos é igual!")
}