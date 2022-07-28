import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { useState } from "react";

const steps = [
  "setting your Questionarie",
  "Add your Questions",
  "Review And submit your Questionarie",
];

export default function HorizontalStepper({ activeStep, setActiveStep }) {
  // const [activeStep, setActiveStep] = useState(0);
  // const handleNext = () => {
  //   const newActiveStep = activeStep + 1;
  //   setActiveStep(newActiveStep);
  // };
  // const handleBack = () => {
  //   const newActiveStep = activeStep - 1;
  //   setActiveStep(newActiveStep);
  // };
  return (
    <Box sx={{ width: "100%", mt: "3%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <Button onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Button onClick={handleNext} sx={{ mr: 1 }}>
        Next
      </Button> */}
    </Box>
  );
}
