import { type NextRequest } from "next/server";
import { getUsers } from "@/lib/dbUtils";


// This API endpoint is for testing if the users are existing in the database.
export async function GET(request: NextRequest) {
  const users = getUsers();

  const response = {
    status: 200,
    body: {
      message: users,
    },
  };

  return Response.json(response);
}