function caps(array) {
    const palavrasMaiusculas = array.map((palavra)=>{
        return palavra.toUpperCase()
    })
    return palavrasMaiusculas
}

const palavras = ["não estou bravo", "oi tudo bem?", "mas eu estou falando baixo!"]

const maiusculas = caps(palavras)

console.log(maiusculas)