import { Box } from "@mui/system";

import SignedInTab from "./SignedInTab";

export default function RightMenu() {
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
      {/* <SignInTab /> */}
      <SignedInTab />
    </Box>
  );
}
