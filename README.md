yarn init

yarn add @babel/cli

yarn add @babel/preset-env(cria o node_modules e o yarn.lock)

.babelrc(arquivo de configuração) {"presets": ["@babel/preset-env"] }
O babel vai transformar as fetures do es6 de uma forma que todos os navegadores entendam(Bundle)
Esse script gera o bundle: "dev": "babel ./main.js -o ./bundle.js" ele execulta o babel chamando o main.js e enviando para o bundle.js
o -w vai ficar monitorando os arquivos(main.js) e quando ocorrer qualquer alteração ele já faz o processo de bundle.
Não esquecer de passar o arquivo bundle.js, pois é ele que os navegadores entendem.
  
