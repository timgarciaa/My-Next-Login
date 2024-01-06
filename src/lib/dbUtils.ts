'use server';

import sql from 'better-sqlite3';

import { User } from '@/types/user.type';

const db = sql('users.db');

export async function getUsers() {
  return db.prepare('SELECT * FROM users').all();
}

export async function postUser(user: User) {
  return db
    .prepare('INSERT INTO users (username, password) VALUES (?, ?)')
    .run(user.username, user.password);
}

export async function getUser(user: User): Promise<User | any> {
  try {
    return db
      .prepare('SELECT * FROM users WHERE username = ?')
      .get(user.username) as User;
  } catch (error) {
    return error;
  }
}
