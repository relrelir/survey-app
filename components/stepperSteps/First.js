import TextField from "@mui/joy/TextField";
import { Button, Stack, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function StepperFirst({ dataFirst, setDataFirst }) {
  const [isQuize, setIsQuize] = useState(false);
  const handleIsQuizeChange = (e) => {
    setIsQuize(!isQuize);
    console.log("isQuize", isQuize);
  };
  return (
    <form
      action="/api/questionarie"
      href="/api/questionarie"
      method="port"
      onSubmit={(e) => {
        e.preventDefault();
        setDataFirst({
          title: e.target.title.value,
          introduction: e.target.introduction.value,
          isQuize: isQuize,
          questions: [],
          pointsValue: e.target.pointsValue.value,
        });
        console.log("dataFirst", dataFirst);
        fetch("/api/questionarie", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => setQuestionaries((prev) => [...prev, data]))
          .catch(console.error);
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "968px",
          height: "875px",

          background: "#FFFFFF",
          borderRadius: "40px",
        }}
      >
        <TextField
          fullWidth
          className="input"
          variant="standard"
          name="title"
          type="title"
          placeholder="Title"
          // onChange={(e) => e.target.title.value}
        />
        {/* {console.log(questionarie?.title)} */}
        <TextField
          className="input"
          variant="standard"
          name="introduction"
          type="introduction"
          placeholder="Introduction"
          multiline="true"
          rows={4}
          // onChange={handleChange}
        />

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Survey</Typography>
          <Switch
            value={isQuize}
            onChange={handleIsQuizeChange}
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography>Quize</Typography>
        </Stack>

        <TextField
          fullWidth
          className="input"
          variant="standard"
          name="pointsValue"
          type="number"
          placeholder="PointsValue"
          // onChange={handleChange}
        />
      </Box>
    </form>
  );
}
