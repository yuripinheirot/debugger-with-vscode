export const errorIdentification = () => {
  let result = 0
  const myArray = [1, 2, 3]

  for (let i = 0; i <= myArray.length; i++) {
    result += myArray[i]
  }

  console.log({ finalResult: result })
  return result
}
