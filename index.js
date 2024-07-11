
function myEach(collection, callback) {
  const keys = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < keys.length; i++) {
    callback(keys[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  const keys = Array.isArray(collection) ? collection : Object.values(collection);
  const newArray = [];
  for (let i = 0; i < keys.length; i++) {
    newArray.push(callback(keys[i]));
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  const keys = Array.isArray(collection) ? collection : Object.values(collection);
  let accumulator = acc === undefined ? keys[0] : acc;
  const startIndex = acc === undefined ? 1 : 0;

  for (let i = startIndex; i < keys.length; i++) {
    accumulator = callback(accumulator, keys[i], collection);
  }
  return accumulator;
}

function myFind(collection, predicate) {
  const keys = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < keys.length; i++) {
    if (predicate(keys[i])) {
      return keys[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const keys = Array.isArray(collection) ? collection : Object.values(collection);
  const filteredArray = [];
  for (let i = 0; i < keys.length; i++) {
    if (predicate(keys[i])) {
      filteredArray.push(keys[i]);
    }
  }
  return filteredArray;
}

function mySize(collection) {
  const keys = Array.isArray(collection) ? collection : Object.keys(collection);
  return keys.length;
}

// Array Functions
function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

// Object Functions
function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

// Example Function Calls

// myEach
myEach([1, 2, 3], alert); // alerts each number in turn and returns the original collection
myEach({one: 1, two: 2, three: 3}, alert); // alerts each number value in turn and returns the original collection

// myMap
console.log(myMap([1, 2, 3], function(num){ return num * 3; })); // => [3, 6, 9]
console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; })); // => [3, 6, 9]

// myReduce
console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10)); // => 16
console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; })); // => 6

// myFind
console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // => 2
console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; })); // => 4

// myFilter
console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // => [2, 4, 6]
console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })); // => []

// mySize
console.log(mySize({one: 1, two: 2, three: 3})); // => 3
console.log(mySize([])); // => 0

// myFirst
console.log(myFirst([5, 4, 3, 2, 1])); // => 5
console.log(myFirst([5, 4, 3, 2, 1], 3)); // => [5, 4, 3]

// myLast
console.log(myLast([5, 4, 3, 2, 1])); // => 1
console.log(myLast([5, 4, 3, 2, 1], 3)); // => [3, 2, 1]

// myKeys
console.log(myKeys({one: 1, two: 2, three: 3})); // => ["one", "two", "three"]

// myValues
console.log(myValues({one: 1, two: 2, three: 3})); // => [1, 2, 3]