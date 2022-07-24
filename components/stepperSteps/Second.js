import TextField from "@mui/joy/TextField";
import { Button, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Answers from "../answers";

export default function StepperSecond() {
  const [answers, setAnswers] = useState([
    {
      _id: 1,
      content: "Blah",
      isCorrect: true,
      pointsValue: 0,
    },
    {
      _id: 2,
      content: "Shuki",
      isCorrect: false,
      pointsValue: 0,
    },
    {
      _id: 3,
      content: "Bonbon",
      isCorrect: false,
      pointsValue: 0,
    },
  ]);
  return (
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
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "968px",
          height: "875px",

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
        {/* <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Open</Typography>
          <Switch
            value={areOptions}
            onChange={handleAreOptionsChange}
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography>Options</Typography>
        </Stack> */}

        {/* <TextField
          fullWidth
          className="input"
          variant="standard"
          name="pointsValue"
          type="number"
          placeholder="PointsValue"
        /> */}
        {/* <Button
          // onClick={handleNext}
          sx={{
            mx: "50%",
          }}
          type="submit"
          variant="contained"
          color="success"
        >
          Create
        </Button> */}
        {/* <Button onClick={handleNext} sx={{ mx: "50%" }}>
    Next
  </Button> */}
        {/* <Button onClick={handleBack} sx={{ mx: "50%" }}>
    Back
  </Button> */}
      </Box>{" "}
    </form>
  );
}
