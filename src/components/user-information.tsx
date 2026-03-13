"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInformation() {
  const { data: session, status } = useSession();
  const user = session?.user;

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {user ? (
        <>
          <p>{`username: ${user?.name}`}</p>
          <p>{`email: ${user?.email}`}</p>
        </>
      ) : (
        <p>User is not logged in</p>
      )}

      <br />

      <button onClick={() => router.back()}>Go Back</button>
    </>
  );
}
