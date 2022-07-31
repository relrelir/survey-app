import { Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { BoxShadowTabs, ButtonDeleteTabs } from "../styles/boxShadow.style";
import { TabList } from "@mui/lab";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteButtonStyle } from "../styles/global.style";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function QuestionsList({
  questionarie,
  setQuestionarie,
  handleSideTabChange,
  sideTabvalue,
}) {
  const { questions } = questionarie;

  const useStyles = makeStyles({
    customLabelColor: {
      width: "22px",
      height: "45px",

      fontFamily: "Kanit",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#1374F9",
    },
  });

  const classes = useStyles();

  const handleAddQuestion = (e) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[newQuestionarie.questions.length] = {
      title: "",
      introduction: "",
      isMultiChoise: true,
      answers: [
        {
          content: "",
          isCorrect: false,
          pointsValue: 0,
          // users: [{}],
        },
      ],
    };

    setQuestionarie(newQuestionarie);
    console.log("questionarie", questionarie);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "628px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={sideTabvalue}
        onChange={handleSideTabChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {questions?.length > 0 &&
          questions.map((question, index) => {
            return (
              // <Box key={index}>
              <Tab
                key={index}
                label={question?.title ? index + 1 + question?.title : index}
                sx={BoxShadowTabs()}
                className={classes.customLabelColor}
              />
            );
          })}
      </Tabs>
      <Button
        sx={{ my: "5px", mr: "73%", ml: "3%" }}
        variant="contained"
        onClick={(e) => handleAddQuestion(e)}
      >
        Add Question
      </Button>
    </Box>
  );
}
