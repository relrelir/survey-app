import Box from "@mui/material/Box";
import * as React from "react";
import Icon from "@mui/material/Icon";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
export default function AddNewQuestionarieButton() {
  return (
    <Box>
      <Icon
        color="primary"
        sx={{
          display: "flex",

          justifyContent: "center",
          color: "#FFFFFF",
          fontSize: 100,
          borderRadius: "50%",
          boxShadow: "0px 0px 27px rgba(0, 0, 0, 0.11)",
          opacity: "70%",
          backgroundColor: "#1374F9",
          alignItems: "center",

          "&:hover": {
            opacity: "100%",

            color: "#abdbe3",
          },
        }}
      >
        +
      </Icon>
    </Box>
  );
}
