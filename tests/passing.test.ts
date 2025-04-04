import { test, expect } from 'bun:test';

test('passing test', () => {
  const result = 1 + 1;
  expect(result).toBe(2);
});
