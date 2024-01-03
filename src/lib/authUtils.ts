import bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export async function verifyPassword(password: string, hash: string) {
  const isValid = bcrypt.compareSync(password, hash);
  return isValid;
}
