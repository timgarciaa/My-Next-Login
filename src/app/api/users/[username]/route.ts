import { type NextRequest } from 'next/server';
import { getUser } from '@/lib/dbUtils';

// This API endpoint is for testing if the users are existing in the database.
export async function GET(request: NextRequest) {
  const username = request.nextUrl.pathname.split('/')[3];
  console.log('username: ', username);
  const user = await getUser({ username });

  const response = {
    status: 200,
    body: {
      message: user,
    },
  };

  return Response.json(response);
}
