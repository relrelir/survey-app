import { Box, Button } from "@mui/material";

export default function QuestionsList() {
  const questions = [];
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        my: "16%",
        ml: "1.5%",

        width: "25%",
        height: "75%",
        backgroundColor: "#FFFFFF",
        borderRadius: "18px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        // transform: "matrix(-1, 0, 0, 1, 0, 0)",

        "&:hover": {
          boxShadow: "4px 16px 16px rgba(0, 0, 0, 0.7)",
          opacity: [0.9, 0.9, 0.9],
        },
      }}
    >
      {questions.length > 0 &&
        questions.map((question, index) => {
          return (
            <Box
              key={index}
              sx={{
                position: "flex",
                flexDirection: "column",
                alignItems: "baseline",
                my: "3px",
                width: "100%",
                height: "10%",
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                // transform: "matrix(-1, 0, 0, 1, 0, 0)",

                "&:hover": {
                  boxShadow: "4px 16px 16px rgba(0, 0, 0, 0.7)",
                  opacity: [0.9, 0.9, 0.9],
                },
              }}
            >
              {question.title}
            </Box>
          );
        })}

      <Button
        sx={{ my: "5px" }}
        variant="contained"
        // onClick={}
      >
        Add Question
      </Button>
    </Box>
  );
}
