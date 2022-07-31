import React, { useState } from "react";
import { Button, Input, Stack, Switch, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import FormControl from "@mui/material/FormControl";
import ClearIcon from "@mui/icons-material/Clear";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  deleteButtonStyle,
  InputAnsStyle,
  InputStyle,
  TypographyStyle,
} from "../styles/global.style";

export default function Answers({
  questionIndex,
  questionarie,
  setQuestionarie,
  handleAnswerPoints,
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
      newQuestionarie.questions[questionIndex].answers[answerIndex].isCorrect =
        e.target.checked;
    } else {
      newQuestionarie.questions[questionIndex].answers[
        answerIndex
      ].isCorrect = true;
    }
    setQuestionarie(newQuestionarie);
    console.log("questionarie", questionarie);
  };

  const handleAnswerTitle = (e, answerIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].answers[answerIndex] = {
      ...questionarie.questions[questionIndex].answers[answerIndex],
    };
    newQuestionarie.questions[questionIndex].answers[answerIndex].content = {
      ...questionarie.questions[questionIndex].answers[answerIndex].content,
    };

    newQuestionarie.questions[questionIndex].answers[answerIndex].content =
      e.target.value;

    setQuestionarie(newQuestionarie);
  };

  const handleDeleteAnswer = (e, answerIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];
    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].answers[answerIndex] = {
      ...questionarie.questions[questionIndex].answers[answerIndex],
    };
    newQuestionarie.questions[questionIndex].answers.splice(answerIndex, 1);

    setQuestionarie(newQuestionarie);
  };

  return (
    <>
      <h1 sx={TypographyStyle()}>Answers</h1>

      {answers?.length > 0 &&
        answers?.map((answer, answerIndex) => (
          <Box
            key={answer?._id ? answer?._id : answerIndex}
            sx={{ display: "flex", flexDirection: "row", gap: "5px" }}
          >
            <Checkbox
              checked={questionarie.isQuize === true ? true : answer.isCorrect}
              onChange={(e) => handleIsCorrect(e, answerIndex)}
            />

            <Input
              sx={InputAnsStyle("36px", "610px")}
              value={answer.content}
              onChange={(e) => handleAnswerTitle(e, answerIndex)}
              id="standard-basic"
              variant="standard"
            />

            <Input
              sx={InputAnsStyle("36px", "100px")}
              value={answer.pointsValue}
              type="number"
              onChange={(e) => {
                handleAnswerPoints(e, answerIndex, questionIndex);
              }}
              id="standard-basic"
              variant="standard"
            />
            <Button
              onClick={(e) => handleDeleteAnswer(e, answerIndex)}
              startIcon={<ClearIcon sx={deleteButtonStyle("30px", "30px")} />}
              // startIcon={
              //   <HighlightOffIcon sx={deleteButtonStyle("30px", "30px")} />
              // }
            />
          </Box>
        ))}
      <Button variant="contained" onClick={(e) => handleAddAnswer(e)}>
        Add Answer
      </Button>
    </>
  );
}
