const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

//PEGOU O TOKEN CRIADO NO TESULT PASSANDO COMO PARAMETRO NO CODIGO ABAIXO
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNlY2NjMmI0LTc1ZWItNDE3Ni1iMTg3LTViNzgzMjc2ZjAyMi0xNzEwMTczMTkyNzEzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZWExMTQ3MzgtNWQ3My00Y2YxLWEwZDAtMjIxNjFhNzUyZjBkIiwidHlwZSI6InQifQ.CDec1unPdg07SAvRJyxf6IidXtWECYbhGAe02D5flaQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
