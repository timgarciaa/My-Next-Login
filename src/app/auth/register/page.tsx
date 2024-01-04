import React from "react";
import RegisterForm from "@/components/auth/register-form";
import { CardWrapper } from "@/components/auth/card-wrapper";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <>
      <CardWrapper headerLabel="Create an account" backButtonHref="/" backButtonLabel="Back">
        <RegisterForm />
      </CardWrapper>
    </>
  );
}
