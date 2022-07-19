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
import Logo from "./Logo";
import TabPanel from "@mui/lab/TabPanel";
import { signIn, useSession } from "next-auth/react";
import AppContext from "../contexts/AppContext";
import { useContext } from "react";
import { useRouter } from "next/router";

function SignInTab() {
  const { query } = useRouter();
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

  async function patchUser() {
    setuUserDetails({ gender, phone, birthday });

    // const res = await fetch("/api/user", {
    //   method: "PATCH",
    //   body: userBody,
    // });
    // console.log(res);
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
  return (
    <TabPanel value="1">
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
        <p>{query.error}</p>
        <div>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Kanit",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "33px",

              color: "#000000",
            }}
          >
            Please logIn to your account:
          </Typography>

          <TextField
            className="input"
            variant="none"
            name="phone"
            type="phone"
            placeholder="phone"
            onChange={handleChange}
          />
          <TextField
            className="input"
            variant="none"
            name="birthday"
            type="date"
            onChange={handleChange}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                label="Gender"
                onChange={handleGenderChange}
                sx={{
                  fontFamily: "Kanit",
                  fontStyle: "normal",
                  borderRadius: "34px",
                }}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Button
          sx={{
            mt: 1, // margin top
            background: "#1374F9",
            borderRadius: "34px",
          }}
          onClick={patchUser}
        >
          Sign up
        </Button>

        {!userDetails && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button onClick={() => signIn("google")}>
                <Image
                  src="/images/google.jpg"
                  height={43}
                  width={43}
                  alt="Your Name"
                  value="google"
                />
              </Button>
              <Button onClick={() => signIn("github")}>
                <Image
                  src="/images/gitHub.jpg"
                  height={43}
                  width={43}
                  alt="Your Name"
                  value="gitHub"
                />
              </Button>
              <Button onClick={() => signIn("facebook")}>
                <Image
                  src="/images/facebook.jpg"
                  height={43}
                  width={43}
                  alt="Your Name"
                  value="facebook"
                />
              </Button>
            </Box>
            <Typography
              // endDecorator=
              fontSize="m"
              sx={{ alignSelf: "center" }}
            >
              have an account? {<Link href="/api/auth/signin">Sign in</Link>}{" "}
              with:
            </Typography>
          </>
        )}
        {userDetails && (
          <>
            <Typography
              // endDecorator=
              fontSize="l"
              sx={{ alignSelf: "center" }}
            >
              connect your sotial network accaunt
            </Typography>
          </>
        )}
      </Sheet>
    </TabPanel>
  );
}

export default SignInTab;
