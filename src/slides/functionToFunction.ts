const firstFunction = () => {
  console.log('First function executed!')
  secondFunction()
}

const secondFunction = () => {
  console.log('Second function executed!')
  thirdFunction()
}

const thirdFunction = () => {
  console.log('Third function executed!')
}

export const functionToFunction = () => {
  console.log('Starting the main function!')
  firstFunction()
  console.log('Main function completed!')
}
