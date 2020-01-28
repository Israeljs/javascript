var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var e =0
// var todos = [
//     'fazer café',
//     'Etudar Javascript',
//     'Acessar comunidade da Rocketset'
// ]
//ao em vez disso iniciar a app pegando informações do localStorage
//transformando de volta num array e pondo um valor padrão 
var todos = JSON.parse(localStorage.getItem('qualquer_coisa')) || []

function renderTodos() {
    listElement.innerHTML = ''//apaga tudo oque estiver na lista

    // for para array. Percorre todo o array e retorna na variável
    for (todo of todos) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElemnt = document.createElement('a')
        linkElemnt.setAttribute('href', '#')

        var pos = todos.indexOf(todos)//vai retornar a posição no index do "todo" que está no ciclo do for
        linkElemnt.setAttribute('onclick', 'deleteTodo(' + pos + ')' )

        var linkText = document.createTextNode('Excluir')

        linkElemnt.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElemnt)

        listElement.appendChild(todoElement) 
    }
}

renderTodos()

addTodo = () => {
    var todoText = inputElement.value

    if (todoText !== '') {
        todos.push(todoText) //Adiciona um novo item no final do array
        inputElement.value = ''
        renderTodos()
    }    
}

buttonElement.onclick = addTodo

deleteTodo = (pos) => { // pos é a posição do array
    todos.splice(pos, 1)//remove, apartir da posição, uma quantidade de itens que for passado
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('qualquer_coisa', JSON.stringify(todos))//A varável local e o setItem funcionam apenas com chave e valor

}