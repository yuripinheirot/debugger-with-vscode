export const errorIdentification = () => {
  let myValue: number = Math.floor(Math.random() * 100)

  if (myValue < 30) {
    myValue *= 2
  }
  if (myValue >= 70) {
    myValue /= 2
  }

  const isPair = myValue % 2 === 0

  if (isPair) {
    myValue = 1000
  }

  return myValue
}
