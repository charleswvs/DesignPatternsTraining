const WriteConsole = require('./WriteConsole') 
const WriteNumbers = require('./WriteNumbers')
const WriteFile = require('./WriteFile')

const outputMethod = process.env.OUTPUT_METHOD || 'console';

const writer = new WriteNumbers({
  consoleFactory: new WriteConsole(),
  fileFactory: new WriteFile(),
})

writer.printNumbers(outputMethod);