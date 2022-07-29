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

export default function StepperFirst({ questionarie, setQuestionarie }) {
  const [isQuize, setIsQuize] = useState(true);
  const handleIsQuizeChange = (e) => {
    setIsQuize(!isQuize);
    setQuestionarie({
      ...questionarie,
      isQuize: e.target.checked,
    });
    console.log("isQuize", isQuize);
    console.log("questionarie", questionarie);
  };
  return (
    <form action="/api/questionarie" href="/api/questionarie" method="port">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormLabel htmlFor="title" sx={TypographyStyle()}>
                Title:
              </FormLabel>
              <Input
                sx={InputStyle("72px", "810px")}
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
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "stretch",
                gap: "30%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box sx={{ mr: "100px" }}>
                  <Typography sx={TypographyStyle()}>Introduction:</Typography>
                </Box>

                <Input
                  sx={InputStyle("300px", "300px")}
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
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  gap: "10%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={TypographyStyle()}>Points:</Typography>

                  <Input
                    align="middle"
                    sx={InputStyle("72px", "200px")}
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
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </form>
  );
}
