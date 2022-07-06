import { Box } from "@mui/system";
import SignInTab from "./SignInTab";
import AvatarTools from "./AvatarTools";
import { Typography } from "@mui/material";
import { useAppContext } from "../context/AppContext";

export default function RihgtMenu() {
  return (
    <Box
      sx={{
        display: "fixed",
        position: "absolute",
        width: "412px",
        height: "70%",
        right: "0",
        top: "12%",

        background: "#F7F8FA",
      }}
    >
      <SignInTab />
    </Box>
  );
}
