import Button from "@mui/material/Button";
import TextField from "@mui/joy/TextField";
import { Box } from "@mui/material";

export default function NewQuestionariePage() {
  return (
    <form
      action="/api/questionarie"
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
          .catch(console.error);
      }}
    >
      <br />
      <Box
        sx={{
          position: "flex",
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
        <span>
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
        </span>

        <br />
        <Button type="submit" variant="contained" color="success">
          Create
        </Button>
      </Box>
    </form>
  );
}
