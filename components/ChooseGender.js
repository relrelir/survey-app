import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";
import { FormLabelStyle } from "../styles/global.style";

export default function ChooseGender({ setGender }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "307px",
        height: "200px",
        boxSizing: "border-box",
        background: "#FFFFFF",
        borderTop: "2px solid #1374F9",
        borderBottom: "2px solid #1374F9",
        borderRadius: "40px",
      }}
    >
      <FormControl>
        <FormLabel sx={FormLabelStyle()} htmlFor="gender">
          Gender
        </FormLabel>
        <Box sx={{ mr: "100px" }}>
          <RadioGroup
            id="gender"
            aria-labelledby="gender"
            name="gender"
            label="Gender"
          >
            {["male", "female", "other"].map((g) => (
              <FormControlLabel
                key={g}
                value={g}
                control={<Radio onChange={(e) => setGender(e.target.value)} />}
                label={g}
              />
            ))}
          </RadioGroup>
        </Box>
      </FormControl>
    </Box>
  );
}
