import { type NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { postUser } from '@/lib/dbUtils';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = {
    username,
    password: hash,
  };

  const result = postUser(user);

  const response = {
    status: 200,
    body: {
      message: result,
    },
  };

  return Response.json(response);
}
