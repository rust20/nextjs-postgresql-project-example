"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut();
  };

  return <button onClick={handleLogout}>Logout</button>;
}
