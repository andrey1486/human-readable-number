  module.exports = function toReadable (number) {
      
  const NumbersArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const dozensArray = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (number < 20) {  
    return NumbersArray[number]
  } else if (number < 100 && !(number % 10)) {
    return dozensArray[Math.floor(number / 10)]
  } else if (number < 100) {
    return dozensArray[Math.floor(number / 10)] + ' ' + NumbersArray[(number % 10)]
  } else if ( !(number % 100)) {
    return NumbersArray[(Math.floor(number / 100))] + ' hundred'
  } else if (number % 100 < 20) {
    return NumbersArray[Math.floor(number / 100)] + ' hundred ' + NumbersArray[(number % 100)]
  } else if (!(number % 10)) {
    return NumbersArray[Math.floor(number / 100)] + ' hundred ' + dozensArray[Math.floor((number % 100) / 10)]
  } else {
    return NumbersArray[Math.floor(number / 100)] + ' hundred ' + dozensArray[Math.floor((number % 100) / 10)] + ' ' + NumbersArray[(number % 10)]
  }
      
}
