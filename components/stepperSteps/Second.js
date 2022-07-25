import TextField from "@mui/joy/TextField";
import { Button, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Answers from "../answers";
import QuestionsList from "../QuestionsList";
import { TabPanel } from "@mui/lab";
import { TabContext } from "@mui/lab";

export default function StepperSecond({ dataSecond, setDataSecond }) {
  const [answers, setAnswers] = useState([{}]);
  const [sideTabvalue, setSideTabValue] = useState(0);

  const handleSideTabChange = (event, newValue) => {
    setSideTabValue(newValue);
  };

  return (
    <TabContext value={`${sideTabvalue}`}>
      <QuestionsList
        handleSideTabChange={handleSideTabChange}
        dataSecond={dataSecond}
        setDataSecond={setDataSecond}
        sideTabvalue={sideTabvalue}
        setSideTabValue={setSideTabValue}
      />
      {dataSecond.length > 0 &&
        dataSecond.map((question, index) => {
          return (
            <TabPanel
              key={index}
              value={`${sideTabvalue}`}
              index={sideTabvalue}
            >
              <form
                action="/api/question"
                href="/api/question"
                method="port"
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   let data = {
                //     // areOptions: areOptions,
                //     title: e.target.title.value,
                //     introduction: e.target.introduction.value,
                //     answers: [],
                //     // pointsValue: e.target.pointsValue.value,
                //   };

                //   fetch("/api/question", {
                //     method: "post",
                //     headers: { "Content-Type": "application/json" },
                //     body: JSON.stringify(data),
                //   })
                //     .then((res) => res.json())
                //     .then((data) => setQuestionaries((prev) => [...prev, data]))
                //     .catch(console.error);
                // }}
              >
                <Box
                  sx={{
                    ml: "30%",
                    mr: "10%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",

                    background: "#FFFFFF",
                    borderRadius: "40px",
                  }}
                >
                  {sideTabvalue === index && (
                    <>
                      <TextField
                        fullWidth
                        className="input"
                        variant="standard"
                        name="title"
                        type="title"
                        placeholder="Title"
                        value={dataSecond.title}
                        onChange={(e) => {
                          setDataSecond({
                            ...dataSecond[index],
                            title: e.target.value,
                          });
                        }}
                      />

                      <TextField
                        className="input"
                        variant="standard"
                        name="introduction"
                        type="introduction"
                        placeholder="Introduction"
                        multiline="true"
                        rows={4}
                        value={dataSecond.introduction}
                        onChange={(e) => {
                          setDataSecond({
                            ...dataSecond,
                            introduction: e.target.value,
                          });
                        }}
                      />
                      <Answers answers={answers} setAnswers={setAnswers} />
                    </>
                  )}
                </Box>{" "}
              </form>
            </TabPanel>
          );
        })}
    </TabContext>
  );
}
