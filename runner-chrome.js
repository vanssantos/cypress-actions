const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  browser: 'chrome' // specs to run here
})
.then((results) => {
  const args = {
    target: env.TARGET_TOKEN_CHROME,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
