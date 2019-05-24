function sumInput() {

  let notaNumberEntered = false;
  let inputNumbers = [];
  let inputSum = 0;
  while (!notaNumberEntered) {
    inputNumbers.push(Number(prompt('Enter number')));  //NaN when not a number"
    if (isNaN(inputNumbers[inputNumbers.length-1])) {    
      notaNumberEntered = true;
      inputNumbers.pop();
    }
  }
  for (let number of inputNumbers) {
    inputSum += number;
  }
  alert(inputSum);
}

function testSplice() {
  let spliceTestArray = [1,2,3];
  spliceTestArray.splice(1,1);
  alert(spliceTestArray.length);
}

function testFind() {
  let fruits = ['apple', 'banana', 'ananas'];
  let aFruits = fruits.filter(function(aFruit) { return aFruit.startsWith('a'); } );
  aFruits.forEach(fruit => {
    alert(fruit);
  });
}

function camelize(dashedStr) {
  let camelizedStr = dashedStr.split('-').map((word, index) => {
    let capWord = word;
    if (index > 0) {
      capWord = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return capWord;}).join(''); 

  alert(camelizedStr);
}

function capitalizeAllElementsExceptFirst (word, index) {
  let capWord = word;
  if (index > 0) {
    capWord = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return capWord;
}

function makeArrayUnique(arr) { 
  return Array.from(new Set(arr));
}

//onclick="makeArrayUnique(['a', 'avv', 'a', 'b', 'a', 'b', 'c']).forEach(element => {
//	alert(element);
// });" 