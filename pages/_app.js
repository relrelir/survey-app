import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/Header";
import { useState } from "react";
import { Button } from "@mui/material";
import SignInTab from "../components/SignInTab";
import RihgtMenu from "../components/rightMenu.js";
import AppContext from "../context/AppContext";
import TabContext from "@mui/lab/TabContext";

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

  return (
    <SessionProvider session={session}>
      <AppContext.Provider value={{ value, handleChange, setValue }}>
        <TabContext value={value}>
          <Header />
          <Component {...pageProps} />
          <RihgtMenu />
        </TabContext>
      </AppContext.Provider>
    </SessionProvider>
  );
}
export default MyApp;
