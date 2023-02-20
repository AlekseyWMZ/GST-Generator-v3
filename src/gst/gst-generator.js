import {
  generatePAN,
  getRandomInt,
  codingSeries,
  pinList, stateNumbers
}
  from './helpers'

const MIN_STATE_NUM = 1;
const MAX_STATE_NUM = 38;


function generateGst(customPAN, customState) {
  const pan = generatePAN(customPAN)

  /* Generation of random state code and 13th GST number char */
  const stateCode = customState === '00' ? getRandomInt(MIN_STATE_NUM, MAX_STATE_NUM).toString().padStart(2, '0') : customState
  const entityNumber = getRandomInt(1, 9).toString()

  /* GST number without last checksum char */
  const gstWithoutCheckSum = stateCode + pan + entityNumber + 'Z'

  /* Calculation of hashsum and checksum to get checksum char*/
  let hashSum = 0
  let checkSum = 0
  for (let i = 0; i <= 13; i++) {
    let codingSeriesIndex = codingSeries.indexOf(gstWithoutCheckSum[i])
    let multiplier = (i % 2) + 1
    let product = codingSeriesIndex * multiplier
    let quotient = Math.floor(product / 36)
    let remainder = product - 36

    if (remainder <= 0) {
      remainder = product
    }
    hashSum += quotient + remainder
    checkSum = (36 - (hashSum % 36)) % 36
  }

  /* Determine checksum char based on coding series */
  const lastChar = codingSeries[checkSum]

  /* Building of GST number and defining it`s PIN code */
  const gst = (gstWithoutCheckSum + lastChar).toString()
    const pin = pinList[stateNumbers[stateCode]].toString()
  const state = stateNumbers[stateCode].toString()

  console.log({ gst, pin })
  return { gst, pin, state }
}

export { generateGst }
