import { describe, it, expect, beforeEach } from "vitest";
import { createUser, findUserByEmail, getUserDisplay, getAllUsers, deleteUser } from "../src/services/user";

describe("user service", () => {
  it("creates a user with capitalized name", () => {
    const user = createUser("john", "john@example.com");
    expect(user.name).toBe("John");
    expect(user.email).toBe("john@example.com");
    expect(user.role).toBe("user");
  });

  it("finds user by email", () => {
    createUser("jane", "jane@example.com");
    const found = findUserByEmail("jane@example.com");
    expect(found).toBeDefined();
    expect(found?.name).toBe("Jane");
  });

  it("returns display string", () => {
    const user = createUser("bob", "bob@example.com", "admin");
    expect(getUserDisplay(user)).toBe("Bob <bob@example.com> (admin)");
  });

  it("deletes a user", () => {
    const user = createUser("temp", "temp@example.com");
    expect(deleteUser(user.id)).toBe(true);
    expect(findUserByEmail("temp@example.com")).toBeUndefined();
  });

  // Intentional failing test
  it("enforces unique emails", () => {
    createUser("alice", "alice@example.com");
    // This test expects uniqueness enforcement that doesn't exist yet
    expect(() => createUser("alice2", "alice@example.com")).toThrow();
  });
});
