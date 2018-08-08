// Add your functions and code here

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

function destrutivelyPrependKitten (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten (name) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten (name) {
  return kittens.shift()
}

