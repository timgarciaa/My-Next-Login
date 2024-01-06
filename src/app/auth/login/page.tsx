import React from 'react';
import LoginForm from '@/components/auth/login-form';
import CardWrapper from '@/components/auth/card-wrapper';

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <CardWrapper headerLabel="Welcome back" backButtonHref="/" backButtonLabel="Back">
      <LoginForm />
    </CardWrapper>
  );
}
