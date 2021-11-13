class WriteConsole {
  print(numbers = []) {
    numbers.forEach(number => console.log(number));
  }
}

module.exports = WriteConsole;