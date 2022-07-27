import TextField from "@mui/joy/TextField";
import { Button, Input, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function StepperFirst({ questionarie, setQuestionarie }) {
  const [isQuize, setIsQuize] = useState(true);
  const handleIsQuizeChange = (e) => {
    setIsQuize(!isQuize);
    setQuestionarie({
      ...questionarie,
      isQuize: e.target.checked,
    });
    console.log("isQuize", isQuize);
    console.log("questionarie", questionarie);
  };
  return (
    <form
      action="/api/questionarie"
      href="/api/questionarie"
      method="port"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   setQuestionarie({
      //     title: e.target.title.value,
      //     introduction: e.target.introduction.value,
      //     isQuize: isQuize,
      //     questions: [],
      //     pointsValue: e.target.pointsValue.value,
      //   });
      //   console.log("questionarie", questionarie);
      //   fetch("/api/questionarie", {
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
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "968px",
          height: "875px",

          background: "#FFFFFF",
          borderRadius: "40px",
        }}
      >
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
          placeholder="Title"
          value={questionarie.title}
          onChange={(e) => {
            setQuestionarie({
              ...questionarie,
              title: e.target.value,
            });
          }}
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
          type="introduction"
          placeholder="Introduction"
          multiline
          value={questionarie.introduction}
          onChange={(e) => {
            setQuestionarie({
              ...questionarie,
              introduction: e.target.value,
            });
          }}
        />

        <Stack
          sx={{
            display: " flex",
            my: "8px",
            width: "250px",
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
          <Typography>Quize</Typography>

          <Switch
            checked={questionarie.isQuize}
            inputProps={{ "aria-label": "ant design" }}
            onChange={(e) => handleIsQuizeChange(e)}
          />
          <Typography>Survey</Typography>
        </Stack>

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
          name="pointsValue"
          type="number"
          placeholder="PointsValue"
          value={questionarie.pointsValue}
          onChange={(e) => {
            setQuestionarie({
              ...questionarie,
              pointsValue: e.target.value,
            });
          }}
        />
      </Box>
    </form>
  );
}
