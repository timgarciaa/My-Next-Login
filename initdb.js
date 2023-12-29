const sql = require("better-sqlite3");
const db = sql("users.db");

const users = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
]

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
  )
  `
).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO users (username, password) VALUES (?, ?)
  `)

  for (const user of users) {
    stmt.run(user.username, user.password);
  }
}

initData();
