import { TabContext } from "@mui/lab";
import { Box } from "@mui/material";
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
import stepperContext from "../../contexts/stepperContext";

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
      <stepperContext.Provider
        value={{
          isQuize,
          setIsQuize,
          handleIsQuizeChange,
          // activeStep,
          sideTabvalue,
          handleSideTabChange,
          questionarie,
          setQuestionarie,
          setSideTabValue,
          isMultiChoise,
          handleMultiChoiseChange,
          handleNext,
          handleBack,
        }}
      >
        <HorizontalStepper activeStep={activeStep} />
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
                <QuestionsList />
                {/* <DeleteQuestions /> */}
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
                    alignItems: "start",
                  }}
                >
                  <StepperFirst />
                  <IsQuize />
                </Box>
              ) : activeStep === 1 ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      ml: "22%",
                      alignItems: "start",
                    }}
                  >
                    <StepperSecond />
                    <MultiChoiseSwitch />
                  </Box>
                </>
              ) : (
                <StepperThird />
              )}
            </Box>
          </Box>
          <ArrowsNextBack
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </TabContext>
      </stepperContext.Provider>
    </Box>
  );
}
