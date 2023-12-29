import Card from "@/components/card";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <h1>Login</h1>
        <form className="flex flex-col space-y-4">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
          <button type="submit">Login</button>
        </form>
      </Card>
    </main>
  );
}
