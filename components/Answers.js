import React, { useState } from "react";
import { Button, Stack, Switch, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

export default function Answers({ answers, setAnswers }) {
  console.log("answers", answers);

  const [areOptions, setAreOptions] = useState(true);
  const handleAreOptionsChange = (e) => {
    setAreOptions(!areOptions);
    console.log("areOptions", areOptions);
  };

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Open</Typography>
        <Switch
          value={areOptions}
          onChange={handleAreOptionsChange}
          defaultChecked
          inputProps={{ "aria-label": "ant design" }}
        />
        <Typography>Options</Typography>
      </Stack>

      <h1>Set Answers</h1>

      <FormControl>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {answers.length > 0 &&
            answers?.map((answer, index) => (
              <Box key={answer?._id ? answer?._id : index}>
                <Checkbox
                  checked={answer.isCorrect}
                  onChange={(e) => {
                    setAnswers(
                      answers.map((answer, answerIndex) => {
                        if (answerIndex === index) {
                          return { ...answer, isCorrect: e.target.checked };
                        } else {
                          return answer;
                        }
                      })
                    );
                  }}
                />
                <TextField
                  value={answer.content}
                  onChange={(e) => {
                    setAnswers(
                      answers.map((answer, answerIndex) => {
                        if (answerIndex === index) {
                          return { ...answer, content: e.target.value };
                        } else {
                          return answer;
                        }
                      })
                    );
                  }}
                  id="standard-basic"
                  variant="standard"
                />

                <TextField
                  value={answer.pointsValue}
                  type="number"
                  onChange={(e) => {
                    setAnswers(
                      answers.map((answer, answerIndex) => {
                        if (answerIndex === index) {
                          return { ...answer, pointsValue: e.target.value };
                        } else {
                          return answer;
                        }
                      })
                    );
                  }}
                  id="standard-basic"
                  variant="standard"
                />
              </Box>
            ))}
        </Box>
      </FormControl>
    </>
  );
}
