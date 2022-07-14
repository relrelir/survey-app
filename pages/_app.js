import TabContext from "@mui/lab/TabContext";
import { createTheme } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import RightMenu from "../components/rightMenu";
import AppContext from "../contexts/AppContext";
import "../styles/globals.css";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [value, setValue] = useState("1");
  const [phone, setPhone] = useState("");
  const [birthday, setbirthday] = useState("");
  const [gender, setGender] = useState("");
  const [userDetails, setuUserDetails] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   fetch("/api/questionarie")
  //     .then((response) => response.json())
  //     .then((survies) => console.log(survies));
  // }, []);

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
        }}
      >
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
