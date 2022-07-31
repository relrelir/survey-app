import { Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { BoxShadowTabs } from "../styles/boxShadow.style";
import { TabList } from "@mui/lab";
import { deleteButtonStyle } from "../styles/global.style";
import ClearIcon from "@mui/icons-material/Clear";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function DeleteQuestions({
  questionarie,
  setQuestionarie,

  sideTabvalue,
  setSideTabValue,
}) {
  const { questions } = questionarie;

  const handleDeleteQuestion = (e, index) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];
    newQuestionarie.questions.splice(index, 1);

    setQuestionarie(newQuestionarie);
    setSideTabValue(sideTabvalue > 0 ? sideTabvalue - 1 : 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: "5%",
        gap: "36px",
      }}
    >
      {questions?.length > 0 &&
        questions.map((question, index) => {
          return (
            <Box key={index}>
              <Button
                onClick={(e) => handleDeleteQuestion(e, index)}
                startIcon={<ClearIcon sx={deleteButtonStyle("30px", "30px")} />}
                // startIcon={
                //   <HighlightOffIcon sx={deleteButtonStyle("30px", "30px")} />
                // }
              />
            </Box>
          );
        })}
    </Box>
  );
}
