import { Box } from "@mui/system";

import SignInTab from "./SignInTab";
import SignedInTab from "./SignedInTab";
import { useSession } from "next-auth/react";

export default function RightMenu() {
  const { data: session } = useSession();

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
      {!session ? (
        <SignInTab />
      ) : (
        <SignedInTab
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        />
      )}
    </Box>
  );
}
