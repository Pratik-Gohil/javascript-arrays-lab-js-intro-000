var kittens =  ["Milo", "Otis", "Garfield"]//define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten() {
  let array = [...kittens]
  array.pop()
  return array
}
