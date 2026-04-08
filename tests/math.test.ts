import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide, isEven } from "../src/utils/math";

describe("math utils", () => {
  describe("add", () => {
    it("adds positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
    it("handles zero", () => {
      expect(add(0, 5)).toBe(5);
    });
    it("handles negatives", () => {
      expect(add(-1, 1)).toBe(0);
    });
  });

  describe("subtract", () => {
    it("subtracts numbers", () => {
      expect(subtract(10, 3)).toBe(7);
    });
  });

  describe("multiply", () => {
    it("multiplies numbers", () => {
      expect(multiply(4, 5)).toBe(20);
    });
    it("handles zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    it("divides numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });
    it("throws on division by zero", () => {
      expect(() => divide(10, 0)).toThrow("Division by zero");
    });
  });

  describe("isEven", () => {
    it("returns true for even numbers", () => {
      expect(isEven(4)).toBe(true);
    });
    it("returns false for odd numbers", () => {
      expect(isEven(3)).toBe(false);
    });
  });
});
