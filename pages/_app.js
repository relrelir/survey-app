/* eslint-disable no-unused-vars */
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import MessegesDrawer from "../components/messegesDrawer";

import SignedInTab from "../components/SignedInDrawer";
import AppContext from "../contexts/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [phone, setPhone] = useState(null);
  const [birthday, setbirthday] = useState(null);
  const [gender, setGender] = useState(null);
  const [userDetails, setuUserDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMessegesOpen, setIsMessegesOpen] = useState(false);
  const [questionaries, setQuestionaries] = useState([]);
  const [messeges, setMesseges] = useState([]);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    fetch("/api/questionarie")
      .then((response) => response.json())
      .then((questionaries) => setQuestionaries(questionaries));
  }, [isEdited]);

  const deleteQuestionarie = (_id) => {
    console.log("_id", _id);
    fetch(`/api/deleteQuestionarie`, {
      method: "DELETE",
      body: _id,
    })
      .then((response) => response.json())
      .then((questionaries) => setIsEdited(!isEdited));
  };

  return (
    <SessionProvider session={session}>
      <AppContext.Provider
        value={{
          // value,
          // handleChange,
          // setValue,
          messeges,
          setMesseges,
          isMessegesOpen,
          setIsMessegesOpen,
          phone,
          setPhone,
          birthday,
          setbirthday,
          gender,
          setGender,
          userDetails,
          setuUserDetails,
          isEdited,
          setIsEdited,
          isOpen,
          setIsOpen,
          questionaries,
          setQuestionaries,
          deleteQuestionarie,
        }}
      >
        {/* <ThemeProvider theme={darkTheme}> */}
        {/* <CssBaseline /> */}
        <SignedInTab />
        <Header />
        <MessegesDrawer />
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </AppContext.Provider>
    </SessionProvider>
  );
}
export default MyApp;
