"use client";

import { signIn } from "next-auth/react";

export default function LoginButton(props: { nextUrl?: string }) {
  const handleLogin = async () => {
    await signIn("google", {
      redirectTo: props.nextUrl || "/",
    });
  };

  return <button onClick={handleLogin}>Login</button>;
}
