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

export default function ChooseMonth({ setMonth, month }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <div>
        {/* <span>Birthday</span> */}
        <div>
          <div>
            <InputLabel id="month">month</InputLabel>
            <Select
              labelId="month"
              id="month"
              value={month}
              label="month"
              onChange={(e) => setMonth(e.target.value)}
              placefolder="select"
            >
              <MenuItem value={1}>January</MenuItem>
              <MenuItem value={2}>February</MenuItem>
              <MenuItem value={3}>March</MenuItem>
              <MenuItem value={4}>April</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>June</MenuItem>
              <MenuItem value={7}>July</MenuItem>
              <MenuItem value={8}>August</MenuItem>
              <MenuItem value={9}>September</MenuItem>
              <MenuItem value={10}>October</MenuItem>
              <MenuItem value={11}>November</MenuItem>
              <MenuItem value={12}>December</MenuItem>
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
