const solution = require('./278_first-bad-version');

test('find the first bad version', () => {

  const test1 = (n) => n >= 4;
  const test2 = (n) => n >= 1;
  const test3 = (n) => n >= 10;

  expect(solution(test1)(10)).toBe(4);
  expect(solution(test2)(1)).toBe(1);
  expect(solution(test3)(10)).toBe(10);
});
