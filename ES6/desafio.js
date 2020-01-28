/*1º exercício
Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
*/

class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
        
    }
    
    isAdmin() {
        return this.admin === true
    }
}

class Admin extends Usuario{
    constructor() {
        super()
        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true. O this do método isAdmin nesse caso faz referência à classe Admin

/*2º exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
*/
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/*2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
*/
const idade = age => age.idade
const idades = usuarios.map(idade)
console.log(idades)


/*2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]*/

const empresa = emp => emp.empresa == 'Rocketseat'
const maior = ano => ano.idade >= 18

const empIdade = usuarios.filter(empresa).filter(maior)
console.log(empIdade)


/*2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
*/

const empresas1 = em => em.empresa
const emproye = usuarios.map(empresas1).find(function(item ) {
    return item == 'Google'
})
console.log(emproye)

/*2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro 
nos usuários que possuem no máximo 50 anos:
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/

const calculo = usuarios.map(usuario => ({...usuario, idade : usuario.idade * 2})).filter(usuario => usuario.idade <= 50)
//...usuario é o array usuarios, completo.
console.log(calculo);
/*OBS: A parte do map não consegui fazer sem olhar a resolução, esqueci de utilizar spread e de que se eu
quero que a função retorne um objeto eu preciso passar () antes, fica de aprendizado rs.
*/