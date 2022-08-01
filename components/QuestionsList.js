import { Box, Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import stepperContext from "../contexts/stepperContext";
import { BoxShadowTabs, TextTabsStyle } from "../styles/boxShadow.style";

export default function QuestionsList() {
  const { questionarie, setQuestionarie, handleSideTabChange, sideTabvalue } =
    useContext(stepperContext);

  const { questions } = questionarie;

  const useStyles = makeStyles(TextTabsStyle());
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
