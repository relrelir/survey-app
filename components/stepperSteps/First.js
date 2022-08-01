import { FormLabel, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import stepperContext from "../../contexts/stepperContext";
import { InputStyle, TypographyStyle } from "../../styles/global.style";

export default function StepperFirst() {
  const { questionarie, setQuestionarie } = useContext(stepperContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FormLabel htmlFor="title" sx={TypographyStyle("62px", "45px")}>
          Title:
        </FormLabel>
        <Input
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
          }}
        >
          <Box sx={{ mr: "100px" }}>
            <Typography sx={TypographyStyle("173px", "45px")}>
              Introduction:
            </Typography>
          </Box>

          <Input
            sx={InputStyle("532px", "209px")}
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
            justifyContent: "center",
          }}
        >
          <Typography sx={TypographyStyle("173px", "45px")}>
            Points Value:
          </Typography>

          <Input
            align="middle"
            sx={InputStyle("263px", "209px")}
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
