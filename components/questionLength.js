import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { numbersStyleStyle } from "../styles/global.style";

export default function QuestionLength({ questionarie }) {
  const { questions } = questionarie;
  console.log("questionslala", questions);
  const number = questions.length + 1;
  console.log("numberlala", questions.length);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", mb: "5%", gap: "33px" }}
    >
      {questions.length > 0 &&
        questions.map((question, index) => {
          return (
            <Box sx={{ ml: "200%", zIndex: 1 }} key={index}>
              <Typography sx={numbersStyleStyle()}>{index + 1}.</Typography>
            </Box>
          );
        })}
    </Box>
  );
}
