import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TabContext } from "@mui/lab";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import DeleteQuestions from "../../components/deleteQuestions";
import HorizontalStepper from "../../components/HorizontalStepper";
import QuestionLength from "../../components/questionLength";
import QuestionsList from "../../components/QuestionsList";
import StepperFirst from "../../components/stepperSteps/First";
import StepperSecond from "../../components/stepperSteps/Second";
import AppContext from "../../contexts/AppContext";
import { NavigateButtonsStyle } from "../../styles/global.style";
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

  const handleSideTabChange = (e, newValue) => {
    console.log("newValue", newValue);
    setSideTabValue(newValue);
    console.log("sideTabvalue", sideTabvalue);
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

      <TabContext value={`${sideTabvalue}`}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {activeStep === 1 && (
            <>
              <QuestionLength questionarie={questionarie} />
              <QuestionsList
                handleSideTabChange={handleSideTabChange}
                questionarie={questionarie}
                setQuestionarie={setQuestionarie}
                sideTabvalue={sideTabvalue}
              />
              <DeleteQuestions
                questionarie={questionarie}
                setQuestionarie={setQuestionarie}
                sideTabvalue={sideTabvalue}
                setSideTabValue={setSideTabValue}
              />
            </>
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              background: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0px 0px 75px rgba(0, 0, 0, 0.06)",
              borderRadius: "25px",
            }}
          >
            <Grid
              sx={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "1087px",
                height: "628px",
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

              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "200%",
          }}
        >
          <Button sx={NavigateButtonsStyle()} onClick={handleBack}>
            <ArrowBackIosIcon />
            Back
          </Button>
          <Button sx={NavigateButtonsStyle()} onClick={handleNext}>
            Next
            <ArrowForwardIosIcon />
          </Button>
          {activeStep === 2 && (
            <Button type="submit" variant="contained" color="success">
              Create
            </Button>
          )}
        </Box>
      </TabContext>
    </Box>
  );
}
