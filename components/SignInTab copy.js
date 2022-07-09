import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { shadows } from "@mui/system";
import Logo from "./Logo";
import TabPanel from "@mui/lab/TabPanel";
import { useSession } from "next-auth/react";

function SignInTab() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <TabPanel value="1">
      <CssVarsProvider>
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
              name="userName"
              type="userName"
              placeholder="UserName"
            />
            <TextField
              className="input"
              variant="none"
              name="email"
              type="email"
              placeholder="Email"
            />
            <TextField
              className="input"
              variant="none"
              name="password"
              type="password"
              placeholder="password"
            />
            <TextField
              className="input"
              variant="none"
              name="password"
              type="password"
              placeholder="confirmPassword"
            />
            <TextField
              className="input"
              variant="none"
              name="phone"
              type="phone"
              placeholder="phoneNumber"
            />
          </div>
          <Button
            sx={{
              mt: 1, // margin top
              background: "#1374F9",
              borderRadius: "34px",
            }}
          >
            Sign up
          </Button>
          <Typography
            endDecorator={<Link href="/sign-in">Sign in</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            have an account?
          </Typography>
          <Typography
            endDecorator={<Link href="/sign-in"> guest</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            or continue with our
          </Typography>
          <Typography fontSize="sm" sx={{ alignSelf: "center" }}>
            Profile
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </TabPanel>
  );
}

export default SignInTab;
