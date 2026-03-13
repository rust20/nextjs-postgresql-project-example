"use client";

import { useState } from "react";
import Link from "next/link";
import { type Session } from "next-auth";

export default function DetailsButtonClient({
  user,
}: {
  user: Session["user"] | null;
}) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      {user ? (
        <>
          <button onClick={() => setIsHidden((prev) => !prev)}>
            {isHidden ? "Show Details" : "Hide Details"}{" "}
          </button>

          <br />

          {isHidden ? null : (
            <>
              <p>{`username: ${user?.name}`}</p>
              <p>{`email: ${user?.email}`}</p>

              <br />

              <Link href={"/account"}>
                <button>View Account Page</button>
              </Link>
            </>
          )}
        </>
      ) : (
        <p>user is not logged in</p>
      )}
    </>
  );
}
