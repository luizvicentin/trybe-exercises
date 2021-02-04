const { TestScheduler } = require('jest');
const reverseString = require('./reversestring');

test('reverseStrig function exists', () => {
    expect(reverseString).toBeDefined();
});

test('Strings reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
  });

