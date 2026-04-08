import { capitalize } from "../utils/string";

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

const users: User[] = [];

export function createUser(name: string, email: string, role: User["role"] = "user"): User {
  const user: User = {
    id: users.length + 1,
    name: capitalize(name),
    email,
    role,
  };
  users.push(user);
  return user;
}

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}

export function getUserDisplay(user: User): string {
  return `${user.name} <${user.email}> (${user.role})`;
}

// Intentional: uses innerHTML for Semgrep to catch
export function renderUserBadge(user: User): string {
  const el = document.createElement("div");
  el.innerHTML = `<span class="badge">${user.name}</span>`;
  return el.outerHTML;
}

export function getAllUsers(): User[] {
  return [...users];
}

export function deleteUser(id: number): boolean {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}
