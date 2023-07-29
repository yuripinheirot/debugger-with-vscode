// CORRECT
export const saveTime = () => {
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

// WRONG
// export const saveTime = () => {
//   let myValue: number = Math.floor(Math.random() * 100)
//   console.log(`myValue iniciou com: ${myValue}`)

//   if (myValue < 30) {
//     myValue *= 2
//     console.log(`Caiu aqui myValue: ${myValue}`)
//   }
//   if (myValue >= 70) {
//     myValue /= 2
//     console.log(`Caiu aquiiii inferno mais embaixo myValue: ${myValue}`)
//   }

//   const isPair = myValue % 2 === 0
//   console.log(`isPair e igual a: ${isPair}`)

//   if (isPair) {
//     myValue = 1000
//     console.log(`Entrou no if isPair: ${myValue}`)
//   }

//   console.log(`Resultado final: ${myValue}`)
//   return myValue
// }
