import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";

export default function MessegesDrawer() {
  const { isMessegesOpen, setIsMessegesOpen, messeges, setMesseges } =
    useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/messeges")
      .then((response) => response.json())
      .then((messeges) => setMesseges(messeges));
  }, []);
  return (
    <>
      {messeges.length > 0 &&
        messeges.map((messege) => {
          return (
            <>
              <Box
                sx={{
                  // my: "38px",
                  // width: "370px",
                  // height: "131px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  // transform: "matrix(-1, 0, 0, 1, 0, 0)",

                  "&:hover": {
                    boxShadow: "4px 16px 16px rgba(0, 0, 0, 0.7)",
                    opacity: [0.9, 0.9, 0.9],
                  },

                  maxWidth: 400,
                  mx: "auto",
                  my: 4,
                  py: 3,
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  // borderRadius: "sm",
                  // boxShadow: "md",
                }}
              >
                {messege.title}
              </Box>
            </>
          );
        })}
    </>
  );
}
