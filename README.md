# testClient
***
### HTTP-client designed to send main API3 requests and parse responses
### Frameworks used: 
1. Node.js
2. Axios.js
3. Jest.js with Babel.js (to use modules)
4. Winston.js (logger)

### How to use
1. Use npm test to run test suite with full logging
2. Use npm test --production to run test suite w/o c.l
3. Use npm test >> results.json to save export results to JSON file
4. Use ./node_modules/.bin/jest -t='scenarioName' to run specific scenario 