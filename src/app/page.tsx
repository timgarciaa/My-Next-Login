import Card from "@/components/card";
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <LoginForm />
      </Card>
      {/* <Card>
        <SignUpForm />
      </Card> */}
    </main>
  );
}
