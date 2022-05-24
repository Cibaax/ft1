'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  num=num.replace(/[^01]/gi,'')
  return Number.parseInt(num,2)
}

function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}