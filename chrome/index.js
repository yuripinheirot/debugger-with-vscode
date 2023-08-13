function execute() {
  const numberOne = document.getElementById('numberOne')
  const numberTwo = document.getElementById('numberTwo')

  const result = numberOne.value * numberTwo.value

  document.getElementById('result').innerHTML = `Result: ${result}`
}
