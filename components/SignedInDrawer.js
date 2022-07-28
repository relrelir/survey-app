import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import TabPanel from "@mui/lab/TabPanel";
import Stack from "@mui/material/Stack";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, Drawer, Fab } from "@mui/material";
import Box from "@mui/material/Box";
import SurviesList from "./SurviesList";
import ControlPointTwoToneIcon from "@mui/icons-material/ControlPointTwoTone";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function SignedInTab() {
  const { isOpen, setIsOpen, questionaries, setQuestionaries } =
    useContext(AppContext);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/questionarie")
      .then((response) => response.json())
      .then((questionaries) => setQuestionaries(questionaries));
  }, []);

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        onClick={() => (
          console.log(session), router.push("/user/edit"), setIsOpen(false)
        )}
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
      <Link href="/api/auth/signout">
        <a
          onClick={(e) => (
            e.preventDefault(),
            router.push("/auth/signin"),
            signOut(),
            setIsOpen(false)
          )}
        >
          Sign Out
        </a>
      </Link>
      <SurviesList sx={{ mt: "100px" }} />

      <Fab
        color="primary"
        sx={{
          boxShadow: "0px 8px 8px rgba(0.7, 0, 0, 0.7)",
          position: "absolute",
          bottom: (theme) => theme.spacing(7),
          right: (theme) => theme.spacing(5),
          "&:hover": {
            backgroundColor: "#002984",
            opacity: [0.0, 0.0, 0.9],
          },
        }}
      >
        <AddIcon
          onClick={() => (setIsOpen(false), router.push("/questionarie/new"))}
        />
      </Fab>
      {/* <ControlPointTwoToneIcon
        onClick={() => router.push("/questionarie/new")}
        sx={{
          fontSize: 100,
          borderRadius: "50%",
          boxShadow: "0px 0px 27px rgba(0, 0, 0, 0.11)",
          opacity: "70%",
          backgroundColor: "#FFFFFF",
          color: "#abdbe3",
          // color: "#FFFFFF",

          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#abcf6",
            cursor: "pointer",
          },
        }}
      /> */}
    </Drawer>
  );
}

export default SignedInTab;
