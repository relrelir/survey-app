import { Box, Typography } from "@mui/material";
import { getSession } from "next-auth/react";
import { ReactQuestionFactory, Survey, SurveyWindow } from "survey-react-ui";
import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { useCallback } from "react";
// StylesManager.applyTheme("modern");

export async function getServerSideProps(context) {
  console.log(context);
  const session = await getSession(context);
  console.log("session", session);
  return {
    props: {}, // will be passed to the page component as props
  };
}

function createQuestionarie() {
  return (
    <Box
      sx={{
        mt: "5px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        my: "8px",
        width: "363px",
        height: "61px",
        backgroundColor: "#FFFFFF",
        borderRadius: "18px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        // transform: "matrix(-1, 0, 0, 1, 0, 0)",

        "&:hover": {
          backgroundColor: "#c7cdd6",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box
        sx={{
          my: "5px",
          ml: "5px",
          width: "42px",
          height: "51px",
          background: "#1374F9",
          borderRadius: "14px",
          color: "white",
        }}
      >
        1
      </Box>
      <Typography
        variant="body1"
        sx={{
          width: "178px",
          height: "43px",
          left: "80px",
          top: "160px",
          fontFamily: "Kanit",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "29px",
          lineHeight: "43px",
          color: "#000000",
        }}
      >
        123
        {/* {question.index} */}
      </Typography>
    </Box>
  );
}
export default createQuestionarie;
