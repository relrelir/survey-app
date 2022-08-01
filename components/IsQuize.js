import { Stack, Switch, Typography } from "@mui/material";
import { BoxShadow } from "../styles/boxShadow.style";
export default function IsQuize({ handleIsQuizeChange, questionarie }) {
  return (
    <Stack
      sx={BoxShadow("250px", "61px")}
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
  );
}
