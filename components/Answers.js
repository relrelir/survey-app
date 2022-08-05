import { Button, Input, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/system";
import stepperContext from "../contexts/stepperContext";
import {
  AddChoiceStyle,
  deleteButtonStyle,
  InputAnsNumberStyle,
  InputAnsStyle,
  InputNumberStyle,
  TypographyStyle,
} from "../styles/global.style";

export default function Answers({ questionIndex, handleAnswerPoints }) {
  const { questionarie, setQuestionarie, isQuize } = useContext(stepperContext);
  // const {
  //   questions: { [questionIndex]: question },
  // } = questionarie;
  const question = questionarie.questions[questionIndex];
  const { answers } = question;
  console.log("questionarie", questionarie);

  const handleAddAnswer = () => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start ",
      }}
    >
      <Typography sx={TypographyStyle()}>Answers:</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center ",
        }}
      >
        {questionarie.questions[questionIndex].isMultiChoise &&
          answers?.length > 0 &&
          answers?.map((answer, answerIndex) => (
            <Box key={answer?._id ? answer?._id : answerIndex}>
              <Checkbox
                size="large"
                checked={
                  questionarie.isQuize === true ? true : answer.isCorrect
                }
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
                sx={InputAnsNumberStyle("36px", "100px")}
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
              />
            </Box>
          ))}
        {!questionarie.questions[questionIndex].isMultiChoise && (
          <Box>
            <Checkbox checked size="large" />

            <Input
              sx={InputNumberStyle("250px", "50px")}
              value={
                questionarie.questions[questionIndex].answers[0].pointsValue
              }
              type="number"
              onChange={(e) => {
                handleAnswerPoints(e, 0, questionIndex);
              }}
              id="standard-basic"
              variant="standard"
            />
          </Box>
        )}
        <Button
          sx={AddChoiceStyle()}
          // variant="contained"
          onClick={(e) => handleAddAnswer(e)}
        >
          {`Add ${isQuize ? "Choice" : "Answer"}`}
        </Button>
      </Box>
    </Box>
  );
}
