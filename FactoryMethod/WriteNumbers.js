class WriteNumbers {
  constructor({
    consoleFactory,
    fileFactory,
  }) {
    this.consoleFactory = consoleFactory;
    this.fileFactory = fileFactory;
  }

  _generate() {
    let numbers = [];

    for (let i = 0; i <= 10; i++) {
      numbers.push(i);
    }

    return numbers;
  }
  
  printNumbers(output) {
    const numbers = this._generate();
    if(output === 'console'){
      this.consoleFactory.print(numbers);
    }
    if(output === 'file'){
      this.fileFactory.print(numbers);
    }
  }
}

module.exports = WriteNumbers;