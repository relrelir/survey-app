import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Image from "next/image";
// import Input from "@mui/joy/Input";
import Box from "@mui/material/Box";

import { Paper } from "@mui/material";
import { getToken } from "next-auth/jwt";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import Errormessege from "../../components/error";
import Logo from "../../components/Logo";
import AppContext from "../../contexts/AppContext";
import { connectDB } from "../../middlware/mongodb";

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
  const { data: session } = useSession();
  const {
    phone,
    setPhone,
    birthday,
    setbirthday,
    gender,
    setGender,
    userDetails,
    setuUserDetails,
  } = useContext(AppContext);

  const callbackUrl = query.callbackUrl || process.env.NEXTAUTH_URL;
  async function patchUser() {
    setuUserDetails({ gender, phone, birthday });

    // const res = await fetch("/api/user", {
    //   method: "PATCH",
    //   body: userBody,
    // });

    // const data = await res.json();
    // set(data);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  function handleChange(event) {
    event.currentTarget.name === "phone"
      ? setPhone(event.currentTarget.value)
      : setbirthday(event.currentTarget.value);
  }

  function SocialButtonComponent({ provider }) {
    return (
      <form
        // action="/api/auth/signin/google"
        // method="POST"
        onSubmit={(e) => (e.preventDefault(), signIn(provider))}
      >
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
    <Paper
      elevation={3}
      variant="none"
      sx={{
        // my: "38px",
        // width: "370px",
        // height: "131px",
        backgroundColor: "#FFFFFF",
        borderRadius: "18px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        // transform: "matrix(-1, 0, 0, 1, 0, 0)",

        "&:hover": {
          boxShadow: "4px 16px 16px rgba(0, 0, 0, 0.7)",
          opacity: [0.9, 0.9, 0.9],
        },

        maxWidth: 400,
        mx: "auto",
        my: 4,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        // borderRadius: "sm",
        // boxShadow: "md",
      }}
    >
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
          // type="email"
          name="email"
          placeholder="email@example.com"
          required
          // label="email"
        />

        <Button
          sx={{
            mt: 1, // margin top
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

export async function getServerSideProps({ params, req, res }) {
  if (
    await Promise.all([getToken({ req }), connectDB(), getCsrfToken({ req })])
  )
    return {
      redirect: {
        destination: req?.query?.callbackUrl || "/",
        permanent: false,
        props: { csrfToken },
      },
    };
  const csrfToken = await getCsrfToken({ req });
}
