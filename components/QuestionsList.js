import { Box, Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { makeStyles } from "@mui/styles";
import React, { useContext, useRef } from "react";
import stepperContext from "../contexts/stepperContext";
import { BoxShadowTabs, TextTabsStyle } from "../styles/boxShadow.style";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteButtonStyle, numbersStyle } from "../styles/global.style";

export default function QuestionsList() {
  const isDelete = useRef(false);
  const {
    handleSideTabChange,
    questionarie,
    setQuestionarie,
    sideTabvalue,
    setSideTabValue,
  } = useContext(stepperContext);

  const { questions } = questionarie;

  const useStyles = makeStyles(TextTabsStyle());
  const classes = useStyles();

  const handleAddQuestion = (e) => {
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

    setQuestionarie(newQuestionarie);
    console.log("questionarie", questionarie);
  };

  const handleDeleteQuestion = (e, index) => {
    const newQuestionarie = { ...questionarie };

    let value = sideTabvalue > 0 ? sideTabvalue - 1 : 0;
    setSideTabValue(value);
    isDelete.current = index;
    // setTimeout(() => {
    //   newQuestionarie.questions = [...questionarie.questions];
    //   newQuestionarie.questions.splice(index, 1);
    // }, 1000);
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
      {sideTabvalue}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={sideTabvalue}
        onChange={() => {
          if (isDelete.current !== false) {
            const newQuestionarie = { ...questionarie };
            newQuestionarie.questions = [...questionarie.questions];
            newQuestionarie.questions.splice(isDelete.current, 1);
            isDelete.current = false;
          }

          handleSideTabChange();
        }}
        sx={{ borderRight: 2, borderColor: "divider" }}
      >
        {questions?.length > 0 &&
          questions.map((question, index) => {
            return (
              // <Box key={index}>
              <Tab
                fullWidth
                key={index}
                sx={BoxShadowTabs()}
                className={classes.customLabelColor}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: "125%",
                      ml: "10%",
                    }}
                  >
                    <Typography sx={numbersStyle()}>
                      {question?.title
                        ? index + 1 + question?.title
                        : index + 1}
                    </Typography>
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
        sx={{ my: "5px", mr: "73%", ml: "3%" }}
        variant="contained"
        onClick={(e) => handleAddQuestion(e)}
      >
        Add Question
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
