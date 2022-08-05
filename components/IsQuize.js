import { Stack, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import stepperContext from "../contexts/stepperContext";
import { BoxShadow } from "../styles/boxShadow.style";
export default function IsQuize() {
  const { handleIsQuizeChange, questionarie } = useContext(stepperContext);
  return (
    <Stack
      sx={BoxShadow("350px", "61px")}
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <Typography sx={{ pl: "30px" }}>Quize</Typography>

      <Switch
        checked={questionarie.isQuize}
        inputProps={{ "aria-label": "ant design" }}
        onChange={(e) => handleIsQuizeChange(e)}
      />
      <Typography sx={{ pr: "30px" }}>Survey</Typography>
    </Stack>
  );
}
