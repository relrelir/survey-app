import Button from "@mui/material/Button";
import TextField from "@mui/joy/TextField";
import { Box, Stepper } from "@mui/material";
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import HorizontalStepper from "../../components/HorizontalStepper";
import StepperFirst from "../../components/stepperSteps/First";
import StepperSecond from "../../components/stepperSteps/Second";
export default function NewQuestionariePage() {
  const { questionaries, setQuestionaries } = useContext(AppContext);
  const [activeStep, setActiveStep] = useState(0);
  const [dataFirst, setDataFirst] = useState({});
  const [dataSecond, setDataSecond] = useState({});
  const handleNext = () => {
    const newActiveStep = activeStep < 3 ? activeStep + 1 : activeStep;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    const newActiveStep = activeStep > 0 ? activeStep - 1 : activeStep;
    setActiveStep(newActiveStep);
    console.log("dataFirst", dataFirst);
  };
  return (
    <>
      <HorizontalStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        sx={{ mt: "10px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {activeStep === 0 ? (
          <StepperFirst dataFirst={dataFirst} setDataFirst={setDataFirst} />
        ) : activeStep === 1 ? (
          <StepperSecond
            dataSecond={dataSecond}
            setDataSecond={setDataSecond}
          />
        ) : (
          <StepperSecond />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          onClick={handleNext}
          sx={{
            position: "fixed",
            bottom: "20%",
            right: "15%",
          }}
        >
          Next
        </Button>
        <Button
          sx={{
            position: "fixed",
            bottom: "20%",
            left: "35%",
          }}
          onClick={handleBack}
        >
          Back
        </Button>
      </Box>
      <Button
        sx={{
          mx: "50%",
        }}
        type="submit"
        variant="contained"
        color="success"
      >
        Create
      </Button>
    </>
  );
}
