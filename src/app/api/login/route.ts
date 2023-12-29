import { type NextRequest } from "next/server";
import { getUser } from "@/lib/dbUtils";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const user = getUser({ username });

  let response = {
    status: 401,
    body: {
      message: "Invalid credentials",
    },
  };

  if (!user) {
    return Response.json(response);
  }

  const userPassword = user.password as string;

  if (user) {
    const isValid = bcrypt.compareSync(password, userPassword);

    if (isValid) {
      response = {
        status: 200,
        body: {
          message: "Login success",
        },
      };
    }
  }

  return Response.json(response);
}
