import { TabContext, TabPanel } from "@mui/lab";
import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Answers from "../Answers";
import { useContext } from "react";
import stepperContext from "../../contexts/stepperContext";
import { InputStyle, TypographyStyle } from "../../styles/global.style";
import QuestionsList from "../QuestionsList";
import MultiChoiseSwitch from "../switch";

export default function StepperSecond() {
  const { questionarie, setQuestionarie, sideTabvalue } =
    useContext(stepperContext);

  const { questions } = questionarie;

  const handleQuestionTitle = (e, questionIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].title = e.target.value;

    setQuestionarie(newQuestionarie);
  };

  const handleQuestionIntroduction = (e, questionIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };

    newQuestionarie.questions[questionIndex].introduction = e.target.value;

    setQuestionarie(newQuestionarie);
  };

  const handleAnswerPoints = (e, answerIndex, questionIndex) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[questionIndex] = {
      ...questionarie.questions[questionIndex],
    };
    console.log("answers", questionarie.questions[questionIndex]);

    newQuestionarie.questions[questionIndex].answers[answerIndex] = {
      ...questionarie.questions[questionIndex].answers[answerIndex],
    };
    newQuestionarie.questions[questionIndex].answers[answerIndex].pointsValue =
      {
        ...questionarie.questions[questionIndex].answers[answerIndex]
          .pointsValue,
      };

    newQuestionarie.questions[questionIndex].answers[answerIndex].pointsValue =
      e.target.value;

    setQuestionarie(newQuestionarie);
    console.log(questionarie);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", mr: "150px" }}>
      <TabContext value={`${sideTabvalue}`}>
        <Box sx={{ mr: "20px" }}>
          <QuestionsList />
        </Box>
        {questions?.length > 0 &&
          questions.map((question, questionIndex) => {
            return (
              <TabPanel
                sx={{ p: 0 }}
                key={questionIndex}
                value={`${sideTabvalue}`}
                index={questionIndex}
              >
                {sideTabvalue === questionIndex && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      ml: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={TypographyStyle()}>Question:</Typography>
                      <Input
                        sx={InputStyle("810px", "65px")}
                        fullWidth
                        multiline
                        rows={1}
                        className="input"
                        variant="standard"
                        name="Question"
                        type="text"
                        defaultValue={question?.title}
                        onChange={(e) => handleQuestionTitle(e, questionIndex)}
                      />
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={TypographyStyle()}>
                        introduction:
                      </Typography>
                      <Input
                        fullWidth
                        multiline
                        rows={2}
                        sx={InputStyle("810px", "110px")}
                        className="input"
                        variant="standard"
                        name="introduction"
                        type="text"
                        value={question.introduction}
                        onChange={(e) =>
                          handleQuestionIntroduction(e, questionIndex)
                        }
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start ",
                      }}
                    >
                      <Answers
                        handleAnswerPoints={handleAnswerPoints}
                        questionIndex={questionIndex}
                      />
                    </Box>
                  </Box>
                )}
              </TabPanel>
            );
          })}
        <MultiChoiseSwitch />
      </TabContext>
    </Box>
  );
}
