/*class List {
    constructor() {
        this.data =[]
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List{
    constructor() {
        super()

        this.usuario = 'Israel'
    }

    mostrarUsuario() {
        console.log(this.usuario)
    }

}

var Minhalista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    Minhalista.add('Novo todo')
    Minhalista.mostrarUsuario()
}*/


//MÉTODO STATIC
//Não precisar estânciar a classe para ter acesso a seus métodos .
//Os métodos statics não reconhecem a sua classe.
//Não pode usar o Matematica.this
//Basicamente recebe uma informação e retorna uma infomação independente do restante da classe.
//Geralmente a classe não tem construction.
class Matematica {
    static soma(a, b) {
        return a + b
    }
}
console.log(Matematica.soma(1, 2))



/*class TodoList extends List{
    constructor() {//podemos fazer ações que disparam assim que o objeto é criado ou iniciar variáveis
        this.todos =[]
    }

    addTodo() {
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}

const Minhalista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    Minhalista.addTodo()
}*/