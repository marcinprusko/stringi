// plik scripts.js

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var upperanimal = animal.toUpperCase();

console.log(upperanimal);
var changes = text.replace('Papugi', upperanimal);

console.log(changes);
console.log('(0, 45): ' + changes.substr(0, 45));

