import { TabContext, TabPanel } from "@mui/lab";
import { Checkbox, FormLabel, Input } from "@mui/material";
import { Box } from "@mui/system";
import Answers from "../Answers";
import { useContext } from "react";
import stepperContext from "../../contexts/stepperContext";
import {
  InputAnsStyle,
  InputStyle,
  TypographyStyle,
} from "../../styles/global.style";
import QuestionsList from "../QuestionsList";
import MultiChoiseSwitch from "../switch";

export default function StepperSecond() {
  const { questionarie, setQuestionarie, sideTabvalue } =
    useContext(stepperContext);

  const { questions } = questionarie;

  // const { answers } = questions;

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
        <>
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
                        justifyContent: "center",
                        alignItems: "center",
                        mb: "100px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FormLabel htmlFor="title" sx={TypographyStyle()}>
                          Question:
                        </FormLabel>
                        <Input
                          id="Question"
                          sx={InputStyle("810px", "65px")}
                          fullWidth
                          className="input"
                          variant="standard"
                          name="Question"
                          type="text"
                          defaultValue={question?.title}
                          onChange={(e) =>
                            handleQuestionTitle(e, questionIndex)
                          }
                        />

                        <FormLabel
                          htmlFor="introduction"
                          sx={TypographyStyle()}
                        >
                          introduction:
                        </FormLabel>
                        <Input
                          sx={InputAnsStyle("65px", "810px")}
                          className="input"
                          variant="standard"
                          name="introduction"
                          type="text"
                          id="introduction"
                          value={question.introduction}
                          onChange={(e) =>
                            handleQuestionIntroduction(e, questionIndex)
                          }
                          multiline
                          rows={2}
                        />
                      </Box>

                      {questionarie.questions[questionIndex].isMultiChoise && (
                        <Answers
                          handleAnswerPoints={handleAnswerPoints}
                          questionIndex={questionIndex}
                        />
                      )}

                      {!questionarie.questions[questionIndex].isMultiChoise && (
                        <>
                          <h1 sx={TypographyStyle()}>Answers</h1>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox checked />
                            <Input
                              sx={InputStyle("50px", "610px")}
                              className="input"
                              variant="standard"
                              name="answer"
                              type="text"
                              id="answer"
                              defaultValue="All answers are correct"
                              disabled
                            />
                            <Input
                              sx={InputStyle("50px", "100px")}
                              value={
                                questionarie.questions[questionIndex].answers[0]
                                  .pointsValue
                              }
                              type="number"
                              onChange={(e) => {
                                handleAnswerPoints(e, 0, questionIndex);
                              }}
                              id="standard-basic"
                              variant="standard"
                            />
                          </Box>
                        </>
                      )}
                    </Box>
                  )}
                </TabPanel>
              );
            })}
          <MultiChoiseSwitch />
        </>
      </TabContext>
    </Box>
  );
}
