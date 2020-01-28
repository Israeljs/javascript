/*AJAX, acrônimo de Asynchronous JavaScript and XML, é uma técnica de
fazer requisições ao servidor sem precisar recarregar a página inteira.
*/

/*Use XMLHttpRequest (XHR) objects to interact with servers. 
You can retrieve data from a URL without having to do a 
full page refresh. This enables a Web page to update just 
part of a page without disrupting what the user is doing.*/
// var xhr = new XMLHttpRequest() 

// xhr.open('GET', 'https://api.github.com/users/diego3g')
// xhr.send(null)

// xhr.onreadystatechange = ()=> {
//     if(xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText))
//     }
// } 



/*Promise é um objeto usado para processamento assíncrono. 
Representa um valor que pode estar disponível agora, no futuro ou nunca.*/

// var minhaPromise = function () {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest() 
//         xhr.open('GET', 'https://api.github.com/users/diego3g')
//         xhr.send(null)

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 resolve(JSON.parse(xhr.responseText))
//             } else {
//                 reject('Erro na requisição')
//             }
//         }   
//     }
//     })
// }
// minhaPromise()
//     .then(function(response) {
//         console.log(response)
//     }) 
//     .catch(function(error) {
//         console.warn(error);
        
//     })   
    
/*var resultado = minhaPromise()
console.log(resultado)
forma errada de chamar a promise(vai dá pending), Pois o js não vai
esperar a reposta da promise para interpretar a próxima linha */


/*Axios é um cliente HTTP, que funciona tanto no browser quanto
 em node.js. A biblioteca é basicamente uma API que sabe interagir 
 tanto com XMLHttpRequest quanto com a interface http do node. 
 Isso significa que o mesmo código utilizado para fazer requisições 
 ajax no browser também funciona no servidor. Além disso, as requisições 
 feitas através da biblioteca retornam uma promise, compatível com a 
 nova versão do JavaScript - ES6. */

axios.get('https://api.github.com/users/diego3g')
.then(function(response) {
    console.log(response.data.avatar_url)
}) 
.catch(function(error) {
    console.warn(error);
    
})