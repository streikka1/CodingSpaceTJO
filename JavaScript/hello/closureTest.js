let name = 'Thomas';

function sayHi() {
  alert('Hi'+ name);
}

name = 'Julia';

sayHi();

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
  
let counter1 = makeCounter();
let counter2 = makeCounter();

function alertAll() {
  
  alert( counter1() ); // 0
  alert( counter1() ); // 1
  
  alert( counter2() ); // 0 (independent)

}