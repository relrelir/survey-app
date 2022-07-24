import TextField from "@mui/joy/TextField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function StepperFirst() {
  return (
    <form
      // action="/api/questionarie"
      href="/api/questionarie"
      method="port"
      onSubmit={(e) => {
        e.preventDefault();
        let data = {
          title: e.target.title.value,
          introduction: e.target.introduction.value,
          questions: [],
          pointsValue: e.target.pointsValue.value,
        };

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
      <br />
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
          // onChange={handleChange}
        />

        <br />

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

        <TextField
          fullWidth
          className="input"
          variant="standard"
          name="pointsValue"
          type="number"
          placeholder="PointsValue"
          // onChange={handleChange}
        />
        {/* <Button
          // onClick={handleNext}
          sx={{
            mx: "50%",
          }}
          type="submit"
          variant="contained"
          color="success"
        >
          Create
        </Button> */}
        {/* <Button onClick={handleNext} sx={{ mx: "50%" }}>
    Next
  </Button> */}
        {/* <Button onClick={handleBack} sx={{ mx: "50%" }}>
    Back
  </Button> */}
      </Box>{" "}
    </form>
  );
}
