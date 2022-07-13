import { Box } from "@mui/system";

import SignInTab from "./SignInTab";
import SignInTabCopy from "./SignInTabCopy";
import SignedInTab from "./SignedInTab";
import { useSession } from "next-auth/react";

export default function RightMenu() {
  const { data: session } = useSession();

  console.log(session);
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
      {!session ? <SignInTabCopy /> : <SignedInTab />}
    </Box>
  );
}
