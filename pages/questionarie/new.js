import Button from "@mui/material/Button";
import TextField from "@mui/joy/TextField";
import { Box, Grid, Stepper } from "@mui/material";
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import HorizontalStepper from "../../components/HorizontalStepper";
import StepperFirst from "../../components/stepperSteps/First";
import StepperSecond from "../../components/stepperSteps/Second";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function NewQuestionariePage() {
  const { questionaries, setQuestionaries } = useContext(AppContext);

  const [activeStep, setActiveStep] = useState(0);
  const [questionarie, setQuestionarie] = useState({
    // author: {},
    title: "",
    introduction: "",
    isQuize: false,
    pointsValue: 0,
    questions: [
      {
        title: "",
        introduction: "",
        isMultiChoise: true,
        answers: [
          {
            content: "",
            isCorrect: false,
            pointsValue: 0,
            // users: [{}],
          },
        ],
      },
    ],
  });

  const handleNext = () => {
    const newActiveStep = activeStep < 3 ? activeStep + 1 : activeStep;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    const newActiveStep = activeStep > 0 ? activeStep - 1 : activeStep;
    setActiveStep(newActiveStep);
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // height: "85vh",
        width: "1087px",
        height: "628px",
        background: "rgba(255, 255, 255, 0.85)",
        boxShadow: "0px 0px 75px rgba(0, 0, 0, 0.06)",
        borderRadius: "25px",
      }}
    >
      <Grid item="true">
        <HorizontalStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          sx={{ mt: "10px" }}
        />

        {activeStep === 0 ? (
          <StepperFirst
            questionarie={questionarie}
            setQuestionarie={setQuestionarie}
          />
        ) : activeStep === 1 ? (
          <StepperSecond
            questionarie={questionarie}
            setQuestionarie={setQuestionarie}
          />
        ) : (
          <StepperSecond />
        )}
      </Grid>
      <Grid item="true">
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button item="true" md={6} onClick={handleBack}>
            <ArrowBackIosIcon />
            Back
          </Button>
          <Button item="true" md={6} onClick={handleNext}>
            Next
            <ArrowForwardIosIcon />
          </Button>
          {activeStep === 2 && (
            <Button type="submit" variant="contained" color="success">
              Create
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
