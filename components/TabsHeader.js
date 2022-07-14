import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function TabsHeader() {
  const { value, handleChange, setValue } = useContext(AppContext);
  const { data: session, status } = useSession();
  const signUp = "Sign Up";
  if (!session) {
    return (
      <Box>
        <TabList
          sx={{ pt: "5%", fontFamily: "Kanit" }}
          fontSize="large"
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab
            sx={{ fontSize: 33, textTransform: "none", fontFamily: "Kanit" }}
            label="Sign In"
            value="1"
          />
        </TabList>
      </Box>
    );
  } else {
    return (
      <Box>
        <TabList
          sx={{ pt: "5%", fontFamily: "Kanit" }}
          fontSize="large"
          onChange={handleChange}
          value={value}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <Tab
            sx={{ fontSize: 33, textTransform: "none", fontFamily: "Kanit" }}
            label="Sign Out"
            value="1"
          />
          <Tab
            sx={{ fontSize: 33, textTransform: "none", fontFamily: "Kanit" }}
            label="another tab"
            value="2"
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
