import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ChooseGender({ gender, setGender }) {
  return (
    <FormControl>
      <FormLabel id="chooseGender">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="chooseGender"
        defaultValue=""
        name="chooseGender"
      >
        <FormControlLabel
          value="female"
          control={<Radio onChange={(e) => setGender(e.target.value)} />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio onChange={(e) => setGender(e.target.value)} />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio onChange={(e) => setGender(e.target.value)} />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
