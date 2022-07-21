import TabContext from "@mui/lab/TabContext";
import { createTheme } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import RightMenu from "../components/rightMenu";
import AppContext from "../contexts/AppContext";
import "../styles/globals.css";
import { Drawer } from "@mui/material";
import SignedInTab from "../components/SignedInTab";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [value, setValue] = useState(0);
  const [phone, setPhone] = useState("");
  const [birthday, setbirthday] = useState("");
  const [gender, setGender] = useState("");
  const [userDetails, setuUserDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [questionaries, setQuestionaries] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SessionProvider session={session}>
      <AppContext.Provider
        value={{
          value,
          handleChange,
          setValue,
          phone,
          setPhone,
          birthday,
          setbirthday,
          gender,
          setGender,
          userDetails,
          setuUserDetails,
          isOpen,
          setIsOpen,
          questionaries,
          setQuestionaries,
        }}
      >
        <SignedInTab />
        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </SessionProvider>
  );
}
export default MyApp;
