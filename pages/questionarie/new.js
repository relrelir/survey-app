import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TabContext } from "@mui/lab";
import { Box, Grid, Stack, Switch, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import ArrowsNextBack from "../../components/ArrowsNextBack";
import DeleteQuestions from "../../components/deleteQuestions";
import HorizontalStepper from "../../components/HorizontalStepper";
import IsQuize from "../../components/IsQuize";

import QuestionsList from "../../components/QuestionsList";
import StepperFirst from "../../components/stepperSteps/First";
import StepperSecond from "../../components/stepperSteps/Second";
import StepperThird from "../../components/stepperSteps/third";
import MultiChoiseSwitch from "../../components/switch";
import AppContext from "../../contexts/AppContext";
import { BoxShadow } from "../../styles/boxShadow.style";
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

  const handleSideTabChange = (e, newValue) => {
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

  const [isMultiChoise, setIsMultiChoise] = useState(true);
  const handleMultiChoiseChange = (e, questionIndex) => {
    setIsMultiChoise(!isMultiChoise);
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].isMultiChoise = e.target.checked;

    setQuestionarie(newQuestionarie);
    console.log("isMultiChoise", isMultiChoise);
    console.log("newQuestionarie", newQuestionarie);
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
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {activeStep === 1 && (
            <>
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
              flexDirection: "column",
              justifyContent: "center",
              width: "1087px",
              height: "628px",
              background: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0px 0px 75px rgba(0, 0, 0, 0.06)",
              borderRadius: "25px",
            }}
          >
            {activeStep === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <StepperFirst
                  handleIsQuizeChange={handleIsQuizeChange}
                  isQuize={isQuize}
                  setIsQuize={setIsQuize}
                  questionarie={questionarie}
                  setQuestionarie={setQuestionarie}
                />
                <IsQuize
                  handleIsQuizeChange={handleIsQuizeChange}
                  questionarie={questionarie}
                />
              </Box>
            ) : activeStep === 1 ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <StepperSecond
                    isMultiChoise={isMultiChoise}
                    sideTabvalue={sideTabvalue}
                    questionarie={questionarie}
                    setQuestionarie={setQuestionarie}
                  />

                  <MultiChoiseSwitch
                    questionarie={questionarie}
                    sideTabvalue={sideTabvalue}
                    handleMultiChoiseChange={handleMultiChoiseChange}
                  />
                </Box>
              </>
            ) : (
              <StepperThird questionarie={questionarie} />
            )}
          </Box>
        </Box>
        <ArrowsNextBack
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </TabContext>
    </Box>
  );
}
