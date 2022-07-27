import TextField from "@mui/joy/TextField";
import { Button, Grid, Input, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Answers from "../answers";
import QuestionsList from "../QuestionsList";
import { TabPanel } from "@mui/lab";
import { TabContext } from "@mui/lab";

export default function StepperSecond({ questionarie, setQuestionarie }) {
  const [sideTabvalue, setSideTabValue] = useState(0);

  const [isMultiChoise, setIsMultiChoise] = useState(true);
  const handleMultiChoiseChange = (e, questionIndex) => {
    setIsMultiChoise(!isMultiChoise);
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].isMultiChoise = e.target.checked;

    setQuestionarie(newQuestionarie);
    console.log("isMultiChoise", isMultiChoise);
    console.log("newQuestionarie", newQuestionarie);
  };

  const handleSideTabChange = (event, newValue) => {
    setSideTabValue(newValue);
  };

  const { questions } = questionarie;

  // const { answers } = questions;

  // const updateQuestions = (questions) => {
  //   questionarie.questions = [...questions];
  //   setQuestionarie({ ...questionarie });
  // };

  // const updateQuestion = (questionIndex, question) => {
  //   let currentQuestion = questionarie.questions[questionIndex];
  //   questionarie.questions[questionIndex] = { ...currentQuestion, ...question };

  //   updateQuestions(questionarie.questions);
  // };

  // const updateAnswer = (questionIndex, answerIndex, answer) => {
  //   let question = questionarie.questions[questionIndex];
  //   question.answers = [...question.answers];
  //   question.answers[answerIndex] = {...answer}
  //   setQuestionarie({...questionarie})
  // }

  // const updateAnswer = (questionIndex, answers) => {
  //   setQuestionarie({...questionarie, []})
  // }

  const handleQuestionTitle = (e, questionIndex) => {
    console.log("questionIndex", questionIndex);
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

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <TabContext
        // sx={{ display: "flex", flexDirection: "row" }}
        value={`${sideTabvalue}`}
      >
        <Grid item="true">
          <QuestionsList
            handleSideTabChange={handleSideTabChange}
            questionarie={questionarie}
            setQuestionarie={setQuestionarie}
            sideTabvalue={sideTabvalue}
          />
        </Grid>
        {questions?.length > 0 &&
          questions.map((question, questionIndex) => {
            console.log("sideTabvalue", sideTabvalue);
            return (
              <Grid item="true" key={questionIndex}>
                <TabPanel value={`${sideTabvalue}`} index={sideTabvalue}>
                  <form
                    action="/api/question"
                    href="/api/question"
                    method="port"
                    // onSubmit={(e) => {
                    //   e.preventDefault();
                    //   let data = {
                    //     // areOptions: areOptions,
                    //     title: e.target.title.value,
                    //     introduction: e.target.introduction.value,
                    //     answers: [],
                    //     // pointsValue: e.target.pointsValue.value,
                    //   };

                    //   fetch("/api/question", {
                    //     method: "post",
                    //     headers: { "Content-Type": "application/json" },
                    //     body: JSON.stringify(data),
                    //   })
                    //     .then((res) => res.json())
                    //     .then((data) => setQuestionaries((prev) => [...prev, data]))
                    //     .catch(console.error);
                    // }}
                  >
                    <Box
                      sx={{
                        ml: "30%",
                        mr: "10%",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",

                        background: "#FFFFFF",
                        borderRadius: "40px",
                      }}
                    >
                      {sideTabvalue === questionIndex && (
                        <>
                          <Input
                            sx={{
                              boxSizing: "border-box",

                              width: "810px",
                              height: "72px",

                              background: "#FFFFFF",
                              border: "2px solid #1374F9",
                              borderRadius: "40px",
                            }}
                            fullWidth
                            className="input"
                            variant="standard"
                            name="title"
                            type="text"
                            placeholder="Title"
                            defaultValue={question?.title}
                            onChange={(e) =>
                              handleQuestionTitle(e, questionIndex)
                            }
                          />
                          <Input
                            sx={{
                              boxSizing: "border-box",

                              width: "810px",
                              height: "72px",

                              background: "#FFFFFF",
                              border: "2px solid #1374F9",
                              borderRadius: "40px",
                            }}
                            className="input"
                            variant="standard"
                            name="introduction"
                            type="text"
                            placeholder="Introduction"
                            value={question.introduction}
                            onChange={(e) =>
                              handleQuestionIntroduction(e, questionIndex)
                            }
                          />
                          <Stack
                            sx={{
                              display: " flex",
                              my: "8px",
                              width: "300px",
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
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Typography>OpenChoise</Typography>
                            {console.log(question.isMultiChoise)}
                            <Switch
                              checked={
                                questionarie.questions[questionIndex]
                                  .isMultiChoise
                              }
                              onChange={(e) =>
                                handleMultiChoiseChange(e, questionIndex)
                              }
                              inputProps={{ "aria-label": "ant design" }}
                            />
                            <Typography>MultiChoise</Typography>
                          </Stack>
                          {questionarie.questions[questionIndex]
                            .isMultiChoise && (
                            <Answers
                              questionIndex={questionIndex}
                              questionarie={questionarie}
                              setQuestionarie={setQuestionarie}
                            />
                          )}

                          {!questionarie.questions[questionIndex]
                            .isMultiChoise && (
                            <Input
                              sx={{
                                boxSizing: "border-box",

                                width: "810px",
                                height: "72px",

                                background: "#FFFFFF",
                                border: "2px solid #1374F9",
                                borderRadius: "40px",
                              }}
                              className="input"
                              variant="standard"
                              name="CorrectAnswer"
                              type="text"
                              placeholder="Correct Answer?"

                              // value={question.introduction}
                              // onChange={(e) =>
                              //   handleQuestionIntroduction(e, questionIndex)
                              // }
                            />
                          )}
                        </>
                      )}
                    </Box>{" "}
                  </form>
                </TabPanel>
              </Grid>
            );
          })}
      </TabContext>
    </Grid>
  );
}
