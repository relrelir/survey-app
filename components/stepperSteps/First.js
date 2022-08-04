import { FormLabel, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import stepperContext from "../../contexts/stepperContext";
import {
  InputNumberStyle,
  InputStyle,
  TypographyStyle,
} from "../../styles/global.style";

export default function StepperFirst() {
  const { questionarie, setQuestionarie } = useContext(stepperContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ml: "10%",
      }}
    >
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
          multiline
          rows={1}
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
            alignItems: "center",
          }}
        >
          <Box sx={{ mr: "100px" }}>
            <Typography sx={TypographyStyle()}>Introduction:</Typography>
          </Box>

          <Input
            sx={InputStyle("532px", "209px")}
            className="input"
            variant="standard"
            name="introduction"
            type="introduction"
            multiline
            rows={3}
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
            alignItems: "center",
          }}
        >
          <Typography sx={TypographyStyle()}>Points Value:</Typography>

          <Input
            align="middle"
            sx={InputNumberStyle("263px", "209px")}
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
  );
}
