const bad = {
  'foo': 3,
  "bar": 4,
  "data-blah": 5,
};

console.log(bad);


const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };
console.log(copy);