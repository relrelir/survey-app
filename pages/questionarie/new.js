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
import { TabContext } from "@mui/lab";
import QuestionsList from "../../components/QuestionsList";
export default function NewQuestionariePage() {
  const { questionaries, setQuestionaries } = useContext(AppContext);
  const [sideTabvalue, setSideTabValue] = useState(0);
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
  const handleSideTabChange = (event, newValue) => {
    setSideTabValue(newValue);
  };

  const handleNext = () => {
    const newActiveStep = activeStep < 3 ? activeStep + 1 : activeStep;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    const newActiveStep = activeStep > 0 ? activeStep - 1 : activeStep;
    setActiveStep(newActiveStep);
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HorizontalStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <TabContext value={`${sideTabvalue}`}>
          {activeStep === 1 && (
            <QuestionsList
              handleSideTabChange={handleSideTabChange}
              questionarie={questionarie}
              setQuestionarie={setQuestionarie}
              sideTabvalue={sideTabvalue}
            />
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Grid
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "1087px",
                height: "628px",
                background: "rgba(255, 255, 255, 0.85)",
                boxShadow: "0px 0px 75px rgba(0, 0, 0, 0.06)",
                borderRadius: "25px",
              }}
              container
            >
              <Grid item>
                {activeStep === 0 ? (
                  <StepperFirst
                    questionarie={questionarie}
                    setQuestionarie={setQuestionarie}
                  />
                ) : activeStep === 1 ? (
                  <StepperSecond
                    sideTabvalue={sideTabvalue}
                    questionarie={questionarie}
                    setQuestionarie={setQuestionarie}
                  />
                ) : (
                  <StepperSecond />
                )}
              </Grid>

              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    sx={{ mr: "150px", px: "20px", py: "10px" }}
                    onClick={handleBack}
                  >
                    <ArrowBackIosIcon />
                    Back
                  </Button>
                  <Button
                    sx={{ ml: "150px", px: "20px", py: "10px" }}
                    onClick={handleNext}
                  >
                    Next
                    <ArrowForwardIosIcon />
                  </Button>
                  {activeStep === 2 && (
                    <Button type="submit" variant="contained" color="success">
                      Create
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
}
