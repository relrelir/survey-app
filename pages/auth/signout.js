import { Button } from "@mui/material";
import { getToken } from "next-auth/jwt";
import { getCsrfToken, signOut } from "next-auth/react";

export default function SignOutPage({ csrfToken }) {
  return (
    <div className="card">
      <h1>Signout</h1>
      <p>Are you sure you want to sign out?</p>
      <form
        action="/api/auth/signout"
        method="POST"
        onSubmit={(e) => (e.preventDefault(), signOut())}
      >
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ params, req, res }) {
  const token = await getToken({ req });
  if (!token)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  const csrfToken = await getCsrfToken({ req });
  return { props: { csrfToken } };
}
