import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Image from "next/image";
// import Input from "@mui/joy/Input";
import Box from "@mui/material/Box";

import { Paper } from "@mui/material";
import { getToken } from "next-auth/jwt";
import { getCsrfToken, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Errormessege from "../../components/error";
import Logo from "../../components/Logo";
import { SignInPaperStyle } from "../../styles/boxShadow.style";

const NEXTAUTH_SIGNIN_ERROS = {
  Signin: "Try signing in with a different account.",
  OAuthSignin: "Try signing in with a different account.",
  OAuthCallback: "Try signing in with a different account.",
  OAuthCreateAccount: "Try signing in with a different account.",
  EmailCreateAccount: "Try signing in with a different account.",
  Callback: "Try signing in with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "The e-mail could not be sent.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  SessionRequired: "Please sign in to access this page.",
  default: "Unable to sign in.",
};

export default function SignInPage({ csrfToken }) {
  const { query } = useRouter();

  const errormessege =
    NEXTAUTH_SIGNIN_ERROS[query.error] || NEXTAUTH_SIGNIN_ERROS.default;

  const callbackUrl = query.callbackUrl || process.env.NEXTAUTH_URL;

  function SocialButtonComponent({ provider }) {
    return (
      <form onSubmit={(e) => (e.preventDefault(), signIn(provider))}>
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <input type="hidden" name="callbackUrl" value={callbackUrl} />

        <Button type="submit">
          <Image
            src={`/images/${provider}.jpg`}
            height={43}
            width={43}
            alt={`Sign In with ${provider}`}
            value={provider}
          />
        </Button>
      </form>
    );
  }
  return (
    <Paper elevation={3} variant="none" sx={SignInPaperStyle()}>
      <Logo />
      <Errormessege messege={errormessege}></Errormessege>
      <form
        action="/api/auth/signin/email"
        method="POST"
        onSubmit={(event) => {
          event.preventDefault();

          signIn("email", { email: event.target.email.value });
        }}
      >
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <input type="hidden" name="callbackUrl" value={callbackUrl} />

        <TextField
          className="input"
          variant="filled"
          id="email"
          autoFocus
          type="text"
          name="email"
          placeholder="email@example.com"
          required
        />

        <Button
          sx={{
            mt: 1,
            background: "#1374F9",
            borderRadius: "34px",
          }}
          type="submit"
          variant="contained"
          color="success"
        >
          Sign in with Email
        </Button>
      </form>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <SocialButtonComponent provider="google" />
        <SocialButtonComponent provider="github" />
        <SocialButtonComponent provider="facebook" />
      </Box>
    </Paper>
  );
}

export async function getServerSideProps({ req }) {
  if (await getToken({ req }))
    return {
      redirect: {
        destination: req?.query?.callbackUrl || "/",
        permanent: false,
      },
    };
  const csrfToken = await getCsrfToken({ req });
  return { props: { csrfToken } };
}
