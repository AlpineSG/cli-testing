import { describe, it, expect } from 'vitest';
import { add, multiply, isEven } from '../src/utils/math';

describe('math utils', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });
  it('checks even numbers', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(3)).toBe(false);
  });
});
