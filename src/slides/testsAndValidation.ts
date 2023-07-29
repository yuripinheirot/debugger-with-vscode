export const testsAndValidation = () => {
  let paymentMethod = 'CREDIT_CARD'
  let totalAmount = 1000

  if (paymentMethod === 'CREDIT_CARD') {
    totalAmount *= 1.1
  }

  console.log(totalAmount)
  return totalAmount
}
