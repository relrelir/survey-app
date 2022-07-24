import TextField from "@mui/joy/TextField";
import { Button, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Answers from "../answers";
import QuestionsList from "../QuestionsList";

export default function StepperSecond({ handleNext, handleBack }) {
  const [answers, setAnswers] = useState([
    {
      //   _id: 1,
      //   content: "Blah",
      //   isCorrect: true,
      //   pointsValue: 0,
      // },
      // {
      //   _id: 2,
      //   content: "Shuki",
      //   isCorrect: false,
      //   pointsValue: 0,
      // },
      // {
      //   _id: 3,
      //   content: "Bonbon",
      //   isCorrect: false,
      //   pointsValue: 0,
    },
  ]);

  return (
    <>
      <QuestionsList />
      <form
        href="/api/question"
        method="port"
        onSubmit={(e) => {
          e.preventDefault();
          let data = {
            // areOptions: areOptions,
            title: e.target.title.value,
            introduction: e.target.introduction.value,
            answers: [],
            // pointsValue: e.target.pointsValue.value,
          };

          fetch("/api/question", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => setQuestionaries((prev) => [...prev, data]))
            .catch(console.error);
        }}
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
          <TextField
            fullWidth
            className="input"
            variant="standard"
            name="title"
            type="title"
            placeholder="Title"
          />

          <br />

          <TextField
            className="input"
            variant="standard"
            name="introduction"
            type="introduction"
            placeholder="Introduction"
            multiline="true"
            rows={4}
          />
          <Answers answers={answers} setAnswers={setAnswers} />
        </Box>{" "}
      </form>
    </>
  );
}
