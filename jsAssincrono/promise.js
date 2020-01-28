/*Promise é um objeto usado para processamento assíncrono. 
Representa um valor que pode estar disponível agora, no futuro ou nunca.*/

var minhaPromise = function () {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest() 
        xhr.open('GET', 'https://api.github.com/users/diego3g')
        xhr.send(null)

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject('Erro na requisição')
            }
        }   
    }
    })
}
minhaPromise()
    .then(function(response) {
        console.log(response)
    }) 
    .catch(function(error) {
        console.warn(error);
        
    })   
    


/*var resultado = minhaPromise()
console.log(resultado)
forma errada de chamar a promise(vai dá pending), Pois o js não vai
esperar a reposta da promise para interpretar a próxima linha */

