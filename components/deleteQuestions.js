import ClearIcon from "@mui/icons-material/Clear";
import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import stepperContext from "../contexts/stepperContext";
import { deleteButtonStyle } from "../styles/global.style";

export default function DeleteQuestions() {
  const { questionarie, setQuestionarie, sideTabvalue, setSideTabValue } =
    useContext(stepperContext);
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
              />
            </Box>
          );
        })}
    </Box>
  );
}
