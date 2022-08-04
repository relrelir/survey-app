import { Tabs } from "@mui/material";
import Box from "@mui/material/Box";

import { useState } from "react";
import { tabHeaderStyle } from "../styles/global.style";
import { TabLink } from "./TabLink";

export default function TabsHeader() {
  const [value, setValue] = useState(0);
  // const { value, setValue } = useContext(AppContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        sx={{ fontFamily: "Kanit" }}
        // fontSize="100%"
        onChange={handleChange}
        value={value}
        aria-label="tabs"
        selectionFollowsFocus
      >
        <TabLink sx={tabHeaderStyle()} label="Home page" href="/" />
        <TabLink
          sx={tabHeaderStyle()}
          label="About The Project"
          href="/about"
        />
        <TabLink sx={tabHeaderStyle()} label="Contact Us" href="/contact" />
      </Tabs>
    </Box>
  );
}
