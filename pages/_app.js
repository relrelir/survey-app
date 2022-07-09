import TabContext from "@mui/lab/TabContext";
import { createTheme } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";

import RightMenu from "../components/rightMenu";
import AppContext from "../context/AppContext";
import "../styles/globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    // newValue = event.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    fetch("/api/survey")
      .then((response) => response.json())
      .then((survies) => console.log(survies));
  }, []);

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={{ value, handleChange, setValue }}>
        <TabContext value={value}>
          <Header />

          <Component {...pageProps} />

          <RightMenu />
        </TabContext>
      </AppContext.Provider>
    </SessionProvider>
  );
}
export default MyApp;
