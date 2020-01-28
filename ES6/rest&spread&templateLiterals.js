//REST pega o resto das propriedades dos sbjetos, array...
// Ele pega o resto de uma desestruturação, de uma passagem de parâmetros
const usuario = {
    nome: 'Israel',
    idade: 39,
    empresa: 'Accenture'
}

const { nome, ...resto } = usuario

console.log(nome)// nome
console.log(resto)// idade e empresa

//ARRAY
const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

//PARÂMETROS DE UMA FUNÇÃO
function soma0(a, b, c) {
    return a + b + c
}
function soma(...params) {//converte em array
    return params.reduce((total, next) => total + next)
}
function soma2(a, b, ...resto) {
    return a + b + resto.reduce((total, next) => total + next)
}
console.log(soma0(1, 2, 3))
console.log(soma(1, 2, 3))
console.log(soma2(1, 2, 3, 4, 5))// 1 e 2 é passado normal e o resto é passado como array [3, 4, 5]

//SPREAD repassa as informações de um objeto ou de um array para outra estrutura de dados
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

//você pode criar um novo objeto trocando algumas propriedades
const usuario1 = {
    nome: 'Israel',
    idade: 39,
    empresa: 'Accenture'
}
const usuario2 = { ...usuario1, empresa: 'inova' }

console.log(usuario2)

//TEMPLATE LITERALS

const name = 'Israel'
const age = 39

console.log('Meu nome é ' + name + ' e tenho ' + age + ' anos!')
console.log(`Meu nome é ${name} e tenho ${age} anos!`)

