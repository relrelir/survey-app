import TabList from "@mui/lab/TabList";
import { Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";

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
        fontSize="large"
        onChange={handleChange}
        value={value}
        aria-label="tabs"
        selectionFollowsFocus
      >
        <Tab
          sx={{ fontSize: 33, textTransform: "none", fontFamily: "Kanit" }}
          label="Home page"
          href="/"
        />

        <Tab
          sx={{ fontSize: 33, textTransform: "none", fontFamily: "Kanit" }}
          label="About The Project"
          href="/about"
        />

        <Tab
          sx={{ fontSize: 33, textTransform: "none", fontFamily: "Kanit" }}
          label="Contact Us"
          href="/contact"
        />
      </Tabs>
    </Box>
  );
}
