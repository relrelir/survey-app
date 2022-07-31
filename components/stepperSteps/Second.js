import TextField from "@mui/joy/TextField";
import {
  Button,
  Checkbox,
  FormLabel,
  Grid,
  Input,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Answers from "../answers";
import QuestionsList from "../QuestionsList";
import { TabPanel } from "@mui/lab";

import {
  InputAnsStyle,
  InputStyle,
  TypographyStyle,
} from "../../styles/global.style";
import { BoxShadow } from "../../styles/boxShadow.style";

export default function StepperSecond({
  questionarie,
  setQuestionarie,
  sideTabvalue,
}) {
  const { questions } = questionarie;

  // const { answers } = questions;

  const handleQuestionTitle = (e, questionIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].title = e.target.value;

    setQuestionarie(newQuestionarie);
  };

  const handleQuestionIntroduction = (e, questionIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].introduction = e.target.value;

    setQuestionarie(newQuestionarie);
  };

  const handleAnswerPoints = (e, answerIndex, questionIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };
    console.log("answers", questionarie.questions[questionIndex]);

    newQuestionarie.questions[questionIndex].answers[answerIndex] = {
      ...questionarie.questions[questionIndex].answers[answerIndex],
    };
    newQuestionarie.questions[questionIndex].answers[answerIndex].pointsValue =
      {
        ...questionarie.questions[questionIndex].answers[answerIndex]
          .pointsValue,
      };

    newQuestionarie.questions[questionIndex].answers[answerIndex].pointsValue =
      e.target.value;

    setQuestionarie(newQuestionarie);
    console.log(questionarie);
  };

  return (
    <>
      <Grid container direction="row" justifyContent="start" alignItems="start">
        {questions?.length > 0 &&
          questions.map((question, questionIndex) => {
            return (
              <Grid item key={questionIndex}>
                <TabPanel value={`${sideTabvalue}`} index={sideTabvalue}>
                  <Box>
                    {sideTabvalue === questionIndex && (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "start",
                          }}
                        >
                          <FormLabel htmlFor="title" sx={TypographyStyle()}>
                            Title:
                          </FormLabel>
                          <Input
                            id="title"
                            sx={InputStyle("72px", "810px")}
                            fullWidth
                            className="input"
                            variant="standard"
                            name="title"
                            type="text"
                            defaultValue={question?.title}
                            onChange={(e) =>
                              handleQuestionTitle(e, questionIndex)
                            }
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FormLabel
                            htmlFor="introduction"
                            sx={TypographyStyle()}
                          >
                            introduction:
                          </FormLabel>
                          <Input
                            sx={InputAnsStyle("72px", "810px")}
                            className="input"
                            variant="standard"
                            name="introduction"
                            type="text"
                            id="introduction"
                            value={question.introduction}
                            onChange={(e) =>
                              handleQuestionIntroduction(e, questionIndex)
                            }
                            multiline
                            rows={2}
                          />
                        </Box>

                        {questionarie.questions[questionIndex]
                          .isMultiChoise && (
                          <Answers
                            handleAnswerPoints={handleAnswerPoints}
                            questionIndex={questionIndex}
                            questionarie={questionarie}
                            setQuestionarie={setQuestionarie}
                          />
                        )}

                        {!questionarie.questions[questionIndex]
                          .isMultiChoise && (
                          <>
                            <h1 sx={TypographyStyle()}>Answers</h1>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <Checkbox checked />
                              <Input
                                sx={InputStyle("36px", "610px")}
                                className="input"
                                variant="standard"
                                name="answer"
                                type="text"
                                id="answer"
                                defaultValue="All answers are correct"
                                disabled
                              />
                              <Input
                                sx={InputStyle("36px", "100px")}
                                value={
                                  questionarie.questions[questionIndex]
                                    .answers[0].pointsValue
                                }
                                type="number"
                                onChange={(e) => {
                                  handleAnswerPoints(e, 0, questionIndex);
                                }}
                                id="standard-basic"
                                variant="standard"
                              />
                            </Box>
                          </>
                        )}
                      </Box>
                    )}
                  </Box>{" "}
                </TabPanel>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
