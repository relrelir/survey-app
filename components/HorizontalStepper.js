import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

const steps = [
  "setting your Questionarie",
  "Add your Questions",
  "Review And submit your Questionarie",
];

export default function HorizontalStepper({ activeStep }) {
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
