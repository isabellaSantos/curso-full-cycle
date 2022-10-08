# Docker Challenge - Nginx com Node.js

Primeiro, clone o repositório:
```
git clone https://github.com/isabellaSantos/curso-full-cycle.git
```
Acesse a pasta do desafio Nginx com Node.js:
```
cd curso-full-cycle/docker-node-nginx-challenge
```
E rode o docker-compose
```
docker-compose up -d --build
```
O comando irá criar três containers, sendo o mySql (db), node.js (app) e nginx (com a porta 8080 exposta).
Para rodar a aplicação, digite no navegador:
```
http://localhost:8080
```
A aplicação vai salvar um novo nome no banco de dados e vai retornar todos os nomes salvos (ordem decrescente). 
É possível passar o nome na requisição. Para isso, utilize o parametro name
```
http://localhost:8080?name=meu-nome
```
Se o parâmetro não for informado, a aplicação vai utilizar um nome gerado aleatoriamente.