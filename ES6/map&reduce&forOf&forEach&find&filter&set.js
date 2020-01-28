//MAP percorre o vetor e retorna um novo array transformado e com o mesmo tamanho
const arr = [1, 2, 3, 4, 5, 8, 9]

const newArr = arr.map(function (item, index) {//o parâmetro é uma função que recebe cada item e o suas posições
    //return item * 2
    return item + index
})

console.log(newArr)

Array.prototype.map2 = function (callback) {//fazendo meu proprio map
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const nums = [1, 2, 3, 4, 5]

const soma = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`//retorna uma template string, ${} interpola uma variável, com 2 casas decimais e substituindo o ponto por vírgula

console.log(nums.map(soma).map(triplo).map(paraDinheiro))
//como o resultado do map é sempre um array então pode ser chamado outro map


//trazer apenas os preços dos produtos
const carrinho = [
    '{ "nome": "borracha", "preço": 7.4 }',
    '{ "nome": "lapis", "preço": 7.4 }',
    '{ "nome": "caderno", "preço": 7.6 }',
    '{ "nome": "canrta", "preço": 7.9 }'
]
const paraObjeto = json => JSON.parse(json)
const apenasPreço = produto => produto.preço

const resultado = carrinho.map(paraObjeto).map(apenasPreço)
console.log(resultado)

/*PODE SER INSTANCIADO APARTIR DO NADA
const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])*/


//filter filtra o array

Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        //o resultado da callback se for true adiciona 
        //se não passa para o próximo elemento do array
        if (callback(this[i]), i, this) {
            newArray.push(this[i])
        }
    }
    return newArray
}
//filtrar apenas os objetos caros e frágeis
const produtos = [
    { nome: 'notbook', preco: 2440, fragil: true },
    { nome: 'ipad', preco: 1000, fragil: true },
    { nome: 'copo vidro', preco: 24, fragil: true },
    { nome: 'copo plastico', preco: 24, fragil: false }
]
const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))


//forEach parametros(posição, indice e o próprio array)
// se quiser passar o indice tem que usar o primeiro parâmetro
Array.prototype.israel = function (callback) {//acesso a instância de um array a partie da variável this
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ['maria', 'joão', 'daniel', 'raquel']

aprovados.israel(function (nome, indice, a) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(a)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//REDUCE é uma forma de consumir toda o array e transformar em uma única informação/variável
// CUNSTRUINO UM
Array.prototype.reduce2 = function (callback) {
    let acumulador = this[i]
    for (let i = 1; i < this.length; i++) {
        acumulador = calllback(acumulador, this[i], i, this)
    }
    return acumulador

}
const sum = arr.reduce(function (total, next) {
    return total + next
})
console.log(sum)

const as = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.2, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
const result = as.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual // 7.3 + 9.2 = 16.5 + 9.2 = 25.7 + 8.7 = 34.4
}, 0)// pode ser passado um valor inicial(número, array, objeto)

console.log(result)

//desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(as.map(a => a.bolsista).reduce(todosBolsistas))

//sesafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(as.map(a => a.bolsista).reduce(algumBolsista))


//FIND é usado quando se quer encontrar(verificar se existe) uma informação dentro do array
const find = arr.find(function (item) {
    return item === 4
})

console.log(find)

//FOR OF intera sobre valores(elementos)

for (const letra of 'code3r') {//string
    console.log(letra)
}

const assuntos = ['Map', 'set', 'promise']

for (let i in assuntos) {//percorre em cima de indice
    console.log(i)
}

for (let assunto of assuntos) {
    console.log(assunto)
}

const assuntosMap = new Map([// em cima de MAP
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (const assunto of assuntosMap) { //percorre com chave e valor
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { //destruction
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])// em cima de set
for (let letra of s) {
    console.log(letra)
}

//SET (conjunto) estrutura não indexada e que não aceita repetição

const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmeiras').add('corinthians')//pode ser encadeado
times.add('flamengo')
times.add('vasco')//repetido será ignorado

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))//tem flamengo? true or false
console.log(times.has('Vasco'))//case sensitive
times.delete('flamengo')
console.log(times.has('flamengo'))

//PODE SER CRIADO A PARTIR DE UM ARRAY
const meninas = ['Raquel', 'Maria', 'Julia']
const meninasSet = new Set(meninas)
console.log(meninasSet)

//A PARTIE D DE UM MATRIZ(IGUAL A UM MAP - LINHA 157)
const matriz = new Set([
    [function () { }, 'função'],
    [{}, 'objeto'],
    [123, 'número']
])
console.log(matriz)