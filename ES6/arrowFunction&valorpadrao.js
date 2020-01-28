const arr = [1, 2, 3, 4, 5, 8, 9]

const newArr = arr.map(function (item) {// antes
    return item * 2
})

const newArr2 = arr.map(item => item * 2)//depois

console.log(newArr2)

//quando se tem mais de um parâmetros tem que pô-los entre parenteses
const newArr3 = arr.map((item, index) => item + index)

// esse tipo de função não é recomendado
var teste = () => [1, 2, 3, 4]
var teste = () => 'teste'
var teste = () => 848
//o objeto tem que ficar entre parenteses
var teste = () => ({casa: 'próprio'})

console.log(teste())

//VALORE PADRÃO

function soma(a, b) {
    return a + b
}

console.log(soma(1))
console.log(soma())// em ambods os casos vai dá nan

//PASSANDO VALORES PADRÕES PARA OS PARÂMETROS

const soma2 = (a = 1, b = 2) => a + b

console.log(soma2())
console.log(soma2())