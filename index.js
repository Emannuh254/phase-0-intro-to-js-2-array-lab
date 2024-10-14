// 1. The initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// 2. Destructive functions

// Appends a cat to the end of the array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepends a cat to the beginning of the array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the array destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 3. Nondestructive functions

// Returns a new array with a cat appended to the end
function appendCat(name) {
  return [...cats, name];
}

// Returns a new array with a cat prepended to the beginning
function prependCat(name) {
  return [name, ...cats];
}

// Returns a new array with the last cat removed
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Returns a new array with the first cat removed
function removeFirstCat() {
  return cats.slice(1);
}
