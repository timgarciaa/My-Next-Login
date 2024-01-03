const bcrypt = require("bcryptjs");
const sql = require("better-sqlite3");
const db = sql("users.db");

const users = [
  { username: "admin", password: "admin12345" },
  { username: "user", password: "user12345" },
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

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    const newUser = {
      username: user.username,
      password: hash,
    };

    stmt.run(newUser.username, newUser.password);
  }
}

initData();
