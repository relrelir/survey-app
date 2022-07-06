import * as React from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ButtonGroup } from "@mui/material";
import AppContext from "../context/AppContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function LoginSignUpBottons() {
  const { value, handleChange, setValue } = useContext(AppContext);
  const { data: session, status } = useSession();
  const signUp = "Sign Up";
  if (!session) {
    return (
      <Box>
        <TabList
          sx={{ pt: "5%" }}
          fontSize="large"
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab
            sx={{ fontSize: 33, textTransform: "none" }}
            label="Sign In"
            value="2"
          />
        </TabList>
      </Box>
    );
  } else {
    return (
      <Box>
        <TabList
          sx={{ pt: "5%" }}
          fontSize="large"
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab
            sx={{ fontSize: 33, textTransform: "none" }}
            label="Sign Out"
            value="1"
          />
          <Tab
            sx={{ fontSize: 33, textTransform: "none" }}
            label="another tab"
            value="1"
          />
        </TabList>
      </Box>
    );
  }
}

// //if logged in
// return (
//   <Box sx={{ width: '100%' }}>
//     <Tabs
//       onChange={handleChange}
//       value={value}
//       aria-label="Tabs where selection follows focus"
//       selectionFollowsFocus
//     >

//       <Tab label="Go Pro" />
//       <Tab label="Sign out" />
//     </Tabs>
//   </Box>
// );
