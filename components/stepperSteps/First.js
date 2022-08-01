import TextField from "@mui/joy/TextField";
import {
  Button,
  FormLabel,
  Grid,
  Input,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { BoxShadow } from "../../styles/boxShadow.style";
import { InputStyle, TypographyStyle } from "../../styles/global.style";
import IsQuize from "../IsQuize";

export default function StepperFirst({
  questionarie,
  setQuestionarie,
  handleIsQuizeChange,
  isQuize,
}) {
  return (
    // <form action="/api/questionarie" href="/api/questionarie" method="port">

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FormLabel htmlFor="title" sx={TypographyStyle("62px", "45px")}>
          Title:
        </FormLabel>
        <Input
          sx={InputStyle("810px", "72px")}
          fullWidth
          className="input"
          variant="standard"
          id="title"
          name="title"
          value={questionarie.title}
          onChange={(e) => {
            setQuestionarie({
              ...questionarie,
              title: e.target.value,
            });
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mr: "100px" }}>
            <Typography sx={TypographyStyle("173px", "45px")}>
              Introduction:
            </Typography>
          </Box>

          <Input
            sx={InputStyle("532px", "209px")}
            className="input"
            variant="standard"
            name="introduction"
            type="introduction"
            multiline
            rows={4}
            value={questionarie.introduction}
            onChange={(e) => {
              setQuestionarie({
                ...questionarie,
                introduction: e.target.value,
              });
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={TypographyStyle("173px", "45px")}>
            Points Value:
          </Typography>

          <Input
            align="middle"
            sx={InputStyle("263px", "209px")}
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
      </Box>
    </Box>

    // </form>
  );
}
