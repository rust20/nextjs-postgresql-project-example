import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Avatar() {
  const session = await auth();
  const user = session?.user;

  return (
    <Image
      src={user?.image || "/next.svg"}
      alt="profile image"
      width={96}
      height={96}
    />
  );
}
