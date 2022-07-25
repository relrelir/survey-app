import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

export default function ChooseYear({ setYear, year }) {
  const years = [];
  for (
    let i = new Date().getFullYear() - 100;
    i < new Date().getFullYear();
    i++
  ) {
    years.push(i);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <div>
        {/* <span>Birthday</span> */}
        <div>
          <div>
            <InputLabel type="number" id="year">
              year
            </InputLabel>
            <Select
              type="number"
              labelId="year"
              id="year"
              value={year}
              label="year"
              onChange={(e) => setYear(e.target.value)}
              placefolder="select"
            >
              {years.map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
            <span>
              <div sx={{ width: "14px", height: "14px" }}>
                <div>
                  <title>icon</title>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </FormControl>
  );
}
