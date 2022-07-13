import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";
import TabPanel from "@mui/lab/TabPanel";
import { useSession } from "next-auth/react";
import Logo from "./Logo";

function SignInTab() {
  const { data: session } = useSession();

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
          {/* <Image
            src="/images/github.jpg" // Route of the image file
            height={40} // Desired size with correct aspect ratio
            width={40} // Desired size with correct aspect ratio
            alt="Your Name"
          /> */}
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
            sx={{ alignSelf: "center", fontFamily: "Kanit" }}
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
