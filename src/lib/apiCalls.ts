import { User } from '@/types/user.type';

export async function getUser(username: string): Promise<User> {
  const response = await fetch(
    `http://localhost:3000/api/users/${username}`,
  );
  const data = await response.json();
  const user: User = data.body.message;
  return user;
}
