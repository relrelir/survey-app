import TextField from "@mui/joy/TextField";
import { Button, Grid, Input, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Answers from "../answers";
import QuestionsList from "../QuestionsList";
import { TabPanel } from "@mui/lab";

import { InputStyle } from "./first.style";
import { BoxShadow } from "../../styles/boxShadow.style";

export default function StepperSecond({
  questionarie,
  setQuestionarie,
  sideTabvalue,
}) {
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

  const { questions } = questionarie;

  // const { answers } = questions;

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
      <Grid item></Grid>
      {questions?.length > 0 &&
        questions.map((question, questionIndex) => {
          console.log("sideTabvalue", sideTabvalue);
          return (
            <Grid item key={questionIndex}>
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
                  <Box>
                    {sideTabvalue === questionIndex && (
                      <>
                        <Input
                          sx={InputStyle("72px", "810px")}
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
                          sx={InputStyle("72px", "810px")}
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
                        <Box sx={{ display: " flex", my: "8px" }}>
                          <Stack
                            sx={BoxShadow("300px", "61px")}
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
                        </Box>
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
                            sx={InputStyle("72px", "810px")}
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
    </Grid>
  );
}
