import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();
  const { accessToken } = data;

  return <div>Access Token: {accessToken}</div>;
}

