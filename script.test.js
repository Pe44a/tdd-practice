const {capitalize} = require('./capitalize');
const {reverseString} = require('./reverseString');
const {calculator} = require('./calculator');
const {caesarCipher} = require('./caesarCipher');
const {analyzeArray} = require('./analyzeArray');

test('capitalize', () => {
    expect(capitalize('hello')).toMatch('Hello');
  });


test('reverse string', () => {
  expect(reverseString('hello')).toMatch('olleh');
});


test('calculator add', () => {
  expect(calculator.add(2, 1)).toBe(3);
});


test('calculator subtract', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});


test('calculator divide', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});


test('calculator multiply', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('caesar cipher', () => {
  expect(caesarCipher('Defend the east wall of the castle.'))
  .toBe('Efgfoe uif fbtu xbmm pg uif dbtumf.');
});


test('analyze array', () => {
  expect(analyzeArray([1,8,3,4,2,6]))
  .toStrictEqual({ average: 4, min: 1, max: 8, length: 6});
});