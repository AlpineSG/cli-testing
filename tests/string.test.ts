import { describe, it, expect } from "vitest";
import { capitalize, slugify, truncate } from "../src/utils/string";

describe("string utils", () => {
  describe("capitalize", () => {
    it("capitalizes first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });
    it("handles empty string", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("slugify", () => {
    it("converts to slug", () => {
      expect(slugify("Hello World")).toBe("hello-world");
    });
    it("removes special characters", () => {
      expect(slugify("Hello! @World#")).toBe("hello-world");
    });
  });

  describe("truncate", () => {
    it("truncates long strings", () => {
      expect(truncate("Hello World", 8)).toBe("Hello...");
    });
    it("does not truncate short strings", () => {
      expect(truncate("Hi", 10)).toBe("Hi");
    });
  });
});
