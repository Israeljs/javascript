// sintax curta de objeto no es6

//caro queira repassar essas variáveis para dentro de um objeto
const nome = 'Israel'
const idade = 39

/*const usuario = {
    nome: nome,// nome sendo a variável nome 
    idade: idade,//mesma coisa
    empresa: 'Accenture'
}*/
//quando o nome da propriedade é igual ao nome da variável dentro do objeto só precisa deixar um deles
const usuario = {
    nome,
    idade,
    empresa: 'Accenture'
}

console.log(usuario)