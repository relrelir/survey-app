import React, { useState } from "react";
import { Button, Stack, Switch, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

export default function Answers({
  questionIndex,
  questionarie,
  setQuestionarie,
}) {
  // const {
  //   questions: { [questionIndex]: question },
  // } = questionarie;
  const question = questionarie.questions[questionIndex];
  const { questions } = questionarie;
  const { answers } = question;
  console.log("questionarie", questionarie);

  const handleAddAnswer = (e) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];
    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };
    newQuestionarie.questions[questionIndex].answers[answers.length] = {
      content: "",
      isCorrect: false,
      pointsValue: 0,
      // users: [{}],
    };
    setQuestionarie(newQuestionarie);
    console.log("questionarie", questionarie);
  };

  const handleIsCorrect = (e, answerIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];
    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };
    newQuestionarie.questions[questionIndex].answers[answerIndex] = {
      ...questionarie.questions[questionIndex].answers[answerIndex],
    };
    if (
      !questionarie.isQuize &&
      questionarie.questions[questionIndex].isMultiChoise
    ) {
      newQuestionarie.questions[questionIndex].answers[answerIndex].isCorrect =
        {
          ...questionarie.questions[questionIndex].answers[answerIndex]
            .isCorrect,
        };
    } else {
      newQuestionarie.questions[questionIndex].answers[
        answerIndex
      ].isCorrect = true;
    }
    setQuestionarie(newQuestionarie);
    console.log("questionarie", questionarie);
  };

  return (
    <>
      <h1>Set Answers</h1>

      <FormControl>
        {answers?.length > 0 &&
          answers?.map((answer, answerIndex) => (
            <Box key={answer?._id ? answer?._id : answerIndex}>
              <Checkbox
                checked={
                  questionarie.isQuize === true ? true : answer.isCorrect
                }
                onChange={(e) => handleIsCorrect(e, answerIndex)}
              />
              <TextField
                value={answer.content}
                onChange={(e) => {}}
                id="standard-basic"
                variant="standard"
              />

              <TextField
                value={answer.pointsValue}
                type="number"
                onChange={(e) => {}}
                id="standard-basic"
                variant="standard"
              />
            </Box>
          ))}
        <Button
          sx={{ my: "5px", mr: "73%", ml: "3%" }}
          variant="contained"
          onClick={(e) => handleAddAnswer(e)}
        >
          Add Answer
        </Button>
      </FormControl>
    </>
  );
}
