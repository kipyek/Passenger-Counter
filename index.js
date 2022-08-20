

document.getElementById('First-Line').innerText = "This is it"
//document.getElementById('Counter-El').innerText = 8
let counter = document.getElementById('Counter-El')
let counterSave = document.getElementById('Save-El')
let count = 0

function countIncrement() {
  count += 1
  counter.innerText = count
}

function save() {
  console.log(count)
  counterSave.innerText = count
}
