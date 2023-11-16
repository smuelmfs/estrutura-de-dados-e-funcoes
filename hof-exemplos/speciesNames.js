const data = require('./database')

// Imprima todos os nomes das especies

function speciesNames(){
    return data.species.reduce((prev, curr) =>{
        return [...prev, curr.name]
    }, [])
}

console.log(speciesNames())