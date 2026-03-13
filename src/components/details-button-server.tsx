import { auth } from "@/lib/auth";
import DetailsButtonClient from "./details-button-client";

export default async function DetailsButtonServer() {
  const session = await auth();
  const user = session?.user || null;

  return <DetailsButtonClient user={user} />;
}
