import Image from "next/image";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Link from "next/link";
import Button from "@mui/joy/Button";
// import Input from "@mui/joy/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TabPanel from "@mui/lab/TabPanel";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import AppContext from "../../contexts/AppContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import Logo from "../../components/Logo";
import { getToken } from "next-auth/jwt";
import ErrorMessage from "../../components/error";

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

  const errorMessage =
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
    <Sheet
      variant="none"
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: 4,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
    >
      <Logo />
      <ErrorMessage message={errorMessage}></ErrorMessage>
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
          type="email"
          name="email"
          placeholder="email@example.com"
          required
          label="email"
        />
        <Button type="submit" variant="contained" color="success">
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
      <Typography
        // endDecorator=
        fontSize="m"
        sx={{ alignSelf: "center" }}
      >
        have an account? {<Link href="/api/auth/signin">Sign in</Link>} with:
      </Typography>
    </Sheet>
  );
}

export async function getServerSideProps({ params, req, res }) {
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
