const express = require('express')
const app = express()
const mysql = require('mysql')
const faker = require('@faker-js/faker')
const port = 5000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'node-nginx-db'
};

var connection = mysql.createConnection(config)
connection.connect()
connection.query('CREATE TABLE if not exists people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));', function (error, _results, _fields) {
  if (error) throw error
})
connection.end()

app.get('/', (req, res) => {
  var name = req.query.name || faker.faker.name.firstName()
  var people = ''

  var connection = mysql.createConnection(config)
  connection.connect()
  
  connection.query('INSERT INTO people (name) VALUES (' + connection.escape(name) + ');', function (error, results, fields) {
    if (error) throw error
  })

  connection.query('SELECT name FROM people ORDER BY id DESC;', function (error, results, fields) {
    if (error) throw error
    results.forEach(element => {
      people = people + '<li>' + element.name + '</li>'
    })

    res.send('<h1>Full Cycle Rocks!</h1><p>Lista de nomes cadastrada no banco de dados</p><ul>'+ people +'</ul>')
  })

  connection.end()
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})