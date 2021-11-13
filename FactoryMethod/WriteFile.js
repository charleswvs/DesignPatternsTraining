const fs = require('fs')

class WriteFile {
  print(number = []) {
    let file = fs.createWriteStream('number.txt')
    file.write(number.join('\n'))
    file.end()
  }
}

module.exports = WriteFile