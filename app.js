// addEventListener
// querySelector

var totalNums = []
var desiredNum = []
var totalSerial = document.querySelector('.total-serials')
var desiredSerials = document.querySelector('.desired-serials')
var btn = document.querySelector('.btn')
var mainDiv = document.querySelector('.result')
var totalText = document.querySelector('.total-ser')
var desiredText = document.querySelector('.desired-ser')
var navigation = document.querySelector('.navigation')
var Print = document.querySelector('.print')
var Reload = document.querySelector('.reload')
var resultDiv = document.querySelector('.result-div')
var Time = document.querySelector('.time')
var time = new Date()
var inputDiv = document.querySelector('.input-div')

function main() {
  // Time 
  Time.innerHTML = 'Printed on ' + time.toLocaleString()
  resultDiv.style.display = 'block'
  // 
  inputDiv.style.display = 'none'
  // Success
  totalSerial.style.borderColor = 'green'
  desiredSerials.style.borderColor = 'green'
  // After result, inputs disable
  totalSerial.disabled = true
  desiredSerials.disabled = true
  btn.disabled = true
  // Adding total serials to the array
  for (var i = 1; i <= Number(totalSerial.value); i++) {
    totalNums.push(i)
  }
  // Adding desired serials to the array
  for (var i = 1; i <= Number(desiredSerials.value); i++) {
    desiredNum.push(i)
  }
  // Showing result summary
  totalText.innerHTML = `Total Serials: ${totalNums.length}`
  desiredText.innerHTML = `Desired Serials: ${desiredNum.length}`
  // Result Show
  for (var i = 0; i < desiredNum.length; i++) {
    // Random index generating
    var randomNum = Math.floor(Math.random() * totalNums.length)
    // creating new divs and elements
    var newDiv = document.createElement('div')
    var textP = document.createElement('p')
    var textNode = document.createTextNode(totalNums[randomNum])
    // splice the random index from total
    totalNums.splice(randomNum, 1)
    // Adding elements
    textP.appendChild(textNode)
    newDiv.appendChild(textP)
    mainDiv.appendChild(newDiv)
    // adding style class to the new divs
    newDiv.classList.add('newDiv')
  }
  // Printing result page
  navigation.style.display = 'block'
  Print.addEventListener('click', function() {
    window.print()
  })
  Reload.addEventListener('click', function() {
    window.location.reload()
  })
  // Removing values after Result
  totalSerial.value = ''
  desiredSerials.value = ''
}
// Whole system
function doWork() {
  if (totalSerial.value == '' && desiredSerials.value == '') {
    alert('Please input two fields')
  }
  else if(totalSerial.value == '') {
    alert('Please input total serials in 1st input')
  }
  else if (desiredSerials.value == '') {
    alert('Please input serials you want in 2nd input')
  }
  else if (Number(desiredSerials.value) > Number(totalSerial.value)) {
    alert('Total serials value must be greater than your desired serials value')
    totalSerial.style.borderColor = 'red'
    desiredSerials.style.borderColor = 'red'
    setTimeout(function() {
      if(totalSerial.style.borderColor == 'red' && desiredSerials.style.borderColor == 'red') {
        totalSerial.style.borderColor = '#000'
        desiredSerials.style.borderColor = '#000'
      }
    }, 2000);
  }
  else {
    main()
  }
}
// Button event
btn.addEventListener('click', function() {
  doWork()
})