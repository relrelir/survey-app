import { Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

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

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={sideTabvalue}
        onChange={handleSideTabChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {questions?.length > 0 &&
          questions.map((question, index) => {
            console.log("from list", question);
            return (
              <Tab
                key={index}
                label={`${question?.title ? question?.title : "..."}`}
                sx={{
                  display: " flex",
                  my: "8px",
                  width: "250px",
                  height: "61px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#c7cdd6",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
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
