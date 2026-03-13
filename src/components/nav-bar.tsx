import { auth } from "@/lib/auth";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

export default async function NavBar() {
  const session = await auth();
  const user = session?.user;

  return <>{user ? <LogoutButton /> : <LoginButton />}</>;
}
