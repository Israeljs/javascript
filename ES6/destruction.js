//

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Paulista',
        estado: 'PE'
    }
}

// const nome = usuario.nome
// const idade = usuario.idade
// const cidade = usuario.endereco.cidade

const { nome, idade, endereco: { cidade } } = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

//desestrutur{ação nos parâmetros de uma função

function informacao({idade, nome, endereco: { cidade }}) {
console.log(idade, nome, cidade)
}

informacao(usuario)