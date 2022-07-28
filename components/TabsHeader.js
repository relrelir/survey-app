import { Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { TabLink } from "./TabLink";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function TabsHeader() {
  const [value, setValue] = useState(0);
  // const { value, setValue } = useContext(AppContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        sx={{ pt: "5%", fontFamily: "Kanit" }}
        fontSize="100%"
        onChange={handleChange}
        value={value}
        aria-label="tabs"
        selectionFollowsFocus
      >
        <TabLink
          sx={{
            fontSize: 33,
            textTransform: "none",
            fontFamily: "Kanit",
            color: "black",
          }}
          label="Home page"
          href="/"
        />
        <TabLink
          sx={{
            fontSize: 33,
            textTransform: "none",
            fontFamily: "Kanit",
            color: "black",
          }}
          label="About The Project"
          href="/about"
        />
        <TabLink
          sx={{
            fontSize: 33,
            textTransform: "none",
            fontFamily: "Kanit",
            color: "black",
          }}
          label="Contact Us"
          href="/contact"
          value={2}
        />
      </Tabs>
    </Box>
  );
}
