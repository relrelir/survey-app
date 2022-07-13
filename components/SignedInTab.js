import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import TabPanel from "@mui/lab/TabPanel";
import Stack from "@mui/material/Stack";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import SurviesList from "../components/SurviesList";
import * as React from "react";

import addNewQuestionarieButton from "./AddNewQuestionarieButton";

function SignedInTab() {
  const { data: session } = useSession();

  return (
    <TabPanel value="1">
      <Box
        onClick={() => console.log(session)}
        sx={{
          my: "38px",
          width: "370px",
          height: "131px",
          backgroundColor: "#FFFFFF",
          borderRadius: "18px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          // transform: "matrix(-1, 0, 0, 1, 0, 0)",

          "&:hover": {
            backgroundColor: "#c7cdd6",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {" "}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            fontSize: 22,

            color: "#42A5F5",
            display: "flex",
            alignItems: "center",
            p: 1,
            m: 1,
            mr: 5,
            height: 100,
            borderRadius: 1,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 90, height: 90, fontSize: 22 }}
            src={session?.user.image}
          />
          <Button variant="plain" sx={{ color: "grey" }}>
            <Typography
              sx={{
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "48px",

                color: "#000000",
              }}
              variant="soft"
            >
              {session?.user.name}
            </Typography>
          </Button>
        </Stack>
      </Box>
      <SurviesList />
      <Link href="/api/auth/signout">
        <a
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </a>
      </Link>
      <Button variant="plain" sx={{ color: "grey" }} onClick={() => signOut()}>
        Sign Out
      </Button>
      <addNewQuestionarieButton />
    </TabPanel>
  );
}

export default SignedInTab;
