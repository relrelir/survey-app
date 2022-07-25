import TextField from "@mui/joy/TextField";
import { Button, Grid, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Answers from "../answers";
import QuestionsList from "../QuestionsList";
import { TabPanel } from "@mui/lab";
import { TabContext } from "@mui/lab";

export default function StepperSecond({ dataSecond, setDataSecond }) {
  const [answers, setAnswers] = useState([
    {
      areOptions: true,
      content: "",
      isCorrect: false,
      pointsValue: 0,
      // users: [{}],
    },
  ]);
  const [questions, setQuestions] = useState([
    { title: "", introduction: "", answers: [] },
  ]);
  const [sideTabvalue, setSideTabValue] = useState(0);

  const handleSideTabChange = (event, newValue) => {
    setSideTabValue(newValue);
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
        <Grid item>
          <QuestionsList
            handleSideTabChange={handleSideTabChange}
            questions={questions}
            setQuestions={setQuestions}
            dataSecond={dataSecond}
            setDataSecond={setDataSecond}
            sideTabvalue={sideTabvalue}
          />
        </Grid>
        {questions.length > 0 &&
          questions.map((question, index) => {
            return (
              <>
                {console.log("sideTabvalue", sideTabvalue)}
                <Grid item>
                  <TabPanel
                    key={index}
                    value={`${sideTabvalue}`}
                    index={sideTabvalue}
                  >
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
                        {sideTabvalue === index && (
                          <>
                            <TextField
                              fullWidth
                              className="input"
                              variant="standard"
                              name="title"
                              type="title"
                              placeholder="Title"
                              value={questions[index].title}
                              onChange={(e) => {
                                setQuestions([
                                  ...questions,
                                  //  {questions[index].title: e.target.value}
                                ]);
                              }}
                            />

                            <TextField
                              className="input"
                              variant="standard"
                              name="introduction"
                              type="introduction"
                              placeholder="Introduction"
                              multiline="true"
                              rows={4}
                              value={questions[index].introduction}
                              onChange={(e) => {
                                setQuestions([
                                  ...questions,
                                  { introduction: e.target.value },
                                ]);
                              }}
                            />
                            <Answers
                              answers={answers}
                              setAnswers={setAnswers}
                            />
                          </>
                        )}
                      </Box>{" "}
                    </form>
                  </TabPanel>
                </Grid>
              </>
            );
          })}
      </TabContext>
    </Grid>
  );
}
