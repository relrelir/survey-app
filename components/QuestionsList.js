import { Box, Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import React, { useContext } from "react";
import stepperContext from "../contexts/stepperContext";
import { BoxShadowTabs, createTabStyle } from "../styles/boxShadow.style";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import {
  deleteButtonStyle,
  numbersStyle,
  tabTitleStyle,
  TypoQuestionsStyle,
} from "../styles/global.style";

export default function QuestionsList() {
  const {
    handleSideTabChange,
    questionarie,
    setQuestionarie,
    sideTabvalue,
    setSideTabValue,
  } = useContext(stepperContext);

  const { questions } = questionarie;

  const handleAddQuestion = () => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    newQuestionarie.questions[newQuestionarie.questions.length] = {
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
    };
    setSideTabValue(questionarie.questions.length);
    setQuestionarie(newQuestionarie);
    console.log("questionarie", questionarie);
  };

  const handleDeleteQuestion = (e, index) => {
    const newQuestionarie = { ...questionarie };
    newQuestionarie.questions = [...questionarie.questions];

    let value =
      sideTabvalue === questionarie.questions.length
        ? sideTabvalue - 1
        : sideTabvalue === 0
        ? 0
        : sideTabvalue;
    setSideTabValue(value);
    setTimeout(() => {
      newQuestionarie.questions.splice(index, 1);
    }, 1000);

    setQuestionarie(newQuestionarie);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "628px",
        width: "110%",
      }}
    >
      <Typography sx={TypoQuestionsStyle()}>Questions:</Typography>
      <Tabs
        scrollButtons
        orientation="vertical"
        variant="scrollable"
        value={sideTabvalue}
        onChange={handleSideTabChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {questions?.length > 0 &&
          questions.map((question, index) => {
            let tabTitle = question?.title
              ? question?.title?.slice(0, 20)?.indexOf(" ") >= 0
                ? question?.title.slice(
                    0,
                    question?.title?.slice(0, 20)?.lastIndexOf(" ")
                  )
                : question?.title.slice(0, 20)
              : "...";
            return (
              <Tab
                key={index}
                sx={BoxShadowTabs("8px")}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={numbersStyle()}>{index + 1}.</Typography>
                    <Typography sx={tabTitleStyle()}>{tabTitle}</Typography>
                    <Button
                      onClick={(e) => handleDeleteQuestion(e, index)}
                      startIcon={
                        <ClearIcon sx={deleteButtonStyle("30px", "30px")} />
                      }
                    />
                  </Box>
                }
              />
            );
          })}
      </Tabs>
      <Button
        sx={BoxShadowTabs("10%")}
        variant="contained"
        onClick={(e) => handleAddQuestion(e)}
      >
        <AddCircleOutlineTwoToneIcon
          sx={{ width: "100px", height: "100px", mr: "10px" }}
          fontSize="large"
          color="primary"
        />
        <Typography sx={createTabStyle()}>Add new Question</Typography>
      </Button>
    </Box>
  );
}
/////////////////////

//  <Tabs
// orientation="vertical"
// variant="scrollable"
// value={sideTabvalue}
// onChange={handleSideTabChange}
// sx={{ borderRight: 1, borderColor: "divider", width: '100%',
// maxWidth: 360,
// bgcolor: 'background.paper',
// position: 'relative',
// overflow: 'auto',
// maxHeight: 300,
// '& ul': { padding: 0 }, }}
// subheader={<li />}
// >

//   <ul>
// {[0].map((sectionId) => (
//   <li key={`section-${sectionId}`}>
//       <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
//   {questions?.length > 0 &&
//           questions.map((question, index) => {

//         <ListItem key={`item-${index}-${question}`}>
//           <ListItemText primary={`Item ${question}`} />
//         </ListItem>
//       })}
//   </li>
// ))}
// </ul>
// </List>
