import { Box, Stack, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import stepperContext from "../contexts/stepperContext";
import { BoxShadow } from "../styles/boxShadow.style";

export default function MultiChoiseSwitch() {
  const { questionarie, sideTabvalue, handleMultiChoiseChange } =
    useContext(stepperContext);
  const { questions } = questionarie;
  return (
    questions?.length > 0 &&
    questions.map((question, questionIndex) => {
      {
        return (
          sideTabvalue == questionIndex && (
            <Box key={questionIndex}>
              <Stack
                sx={BoxShadow("300px", "61px")}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Typography>OpenChoise</Typography>
                {console.log(question.isMultiChoise)}
                <Switch
                  checked={questionarie.questions[questionIndex].isMultiChoise}
                  onChange={(e) => handleMultiChoiseChange(e, questionIndex)}
                  inputProps={{
                    "aria-label": "ant design",
                  }}
                />
                <Typography>MultiChoise</Typography>
              </Stack>
            </Box>
          )
        );
      }
    })
  );
}
