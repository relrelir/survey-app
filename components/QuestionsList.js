import { Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function QuestionsList({
  setDataSecond,
  dataSecond,
  handleSideTabChange,
  sideTabvalue,
  questions,
  setQuestions,
}) {
  return (
    // <Box
    //   sx={{
    //     position: "fixed",
    //     left: 0,
    //     top: 0,
    //     my: "16%",
    //     ml: "1.5%",

    //     width: "25%",
    //     height: "75%",
    //     backgroundColor: "#FFFFFF",
    //     borderRadius: "18px",
    //     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    //     // transform: "matrix(-1, 0, 0, 1, 0, 0)",

    //     "&:hover": {
    //       boxShadow: "4px 16px 16px rgba(0, 0, 0, 0.7)",
    //       opacity: [0.9, 0.9, 0.9],
    //     },
    //   }}
    // >
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={sideTabvalue}
        onChange={handleSideTabChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {questions.length > 0 &&
          questions.map((question, index) => {
            return (
              <Tab
                key={index}
                label={`${
                  question[index]?.title ? question[index]?.title : "..."
                }`}
                sx={{ color: "blue" }}
              />
            );
          })}
      </Tabs>

      <Button
        sx={{ my: "5px", mr: "73%", ml: "3%" }}
        variant="contained"
        onClick={() =>
          setQuestions([
            ...questions,
            {
              title: "",
              introduction: "",
              answers: [
                {
                  areOptions: true,
                  content: "",
                  isCorrect: false,
                  pointsValue: 0,
                  // users: [{}],
                },
              ],
            },
          ])
        }
      >
        Add Question
      </Button>
    </>
    // </Box>
  );
}
