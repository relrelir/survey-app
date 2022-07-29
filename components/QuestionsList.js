import { Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { BoxShadowTabs, ButtonDeleteTabs } from "../styles/boxShadow.style";
import { TabList } from "@mui/lab";

export default function QuestionsList({
  questionarie,
  setQuestionarie,

  handleSideTabChange,
  sideTabvalue,
}) {
  const { questions } = questionarie;

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

  const handleDeleteQuestion = (e, index) => {
    console.log("index", index);
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];
    newQuestionarie.questions.splice(index, 1);

    setQuestionarie(newQuestionarie);
    console.log("questionarie", questionarie);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TabList
        orientation="vertical"
        variant="scrollable"
        // value={sideTabvalue}
        onChange={handleSideTabChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {questions?.length > 0 &&
          questions.map((question, index) => {
            return (
              // <Box key={index}>
              <Tab
                key={index}
                label={`${question?.title ? question?.title : "..."}`}
                sx={BoxShadowTabs()}
                value={`${sideTabvalue}`}
              />
              //  <Button
              //   sx={ButtonDeleteTabs()}
              //   onClick={(e) => handleDeleteQuestion(e, index)}
              //   variant="contained"
              //   startIcon={<DeleteIcon />}
              // >
              //   Delete
              // </Button>
              // </Box>
            );
          })}
      </TabList>
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
