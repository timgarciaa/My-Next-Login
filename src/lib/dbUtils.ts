import sql from "better-sqlite3";
import { User } from "@/types/user.type";

const db = sql("users.db");

export function getUsers() {
  return db.prepare("SELECT * FROM users").all();
}

export function postUser(user: User) {
  return db
    .prepare("INSERT INTO users (username, password) VALUES (?, ?)")
    .run(user.username, user.password);
}

export function getUser(user: User): User | any {
  try {
    return db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(user.username) as User;
  } catch (error) {
    return error;
  }
}
