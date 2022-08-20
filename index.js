
let counter = document.getElementById('Counter-El')
let counterSave = document.getElementById('Save-El')
let count = 0

function countIncrement() {
  count += 1
  counter.textContent = count
}

function save() {
  let countStr = count + " - "
  counterSave.textContent += countStr
  counter.textContent = 0
  count = 0
}
