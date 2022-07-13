import Box from "@mui/material/Box";

import Icon from "@mui/material/Icon";

export default function addNewQuestionarieButton() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <Icon
        color="primary"
        sx={{
          color: "#FFFFFF",
          fontSize: 100,
          borderRadius: "50%",
          boxShadow: "0px 0px 27px rgba(0, 0, 0, 0.11)",
          opacity: "70%",
          backgroundColor: "#1374F9",

          "&:hover": {
            opacity: "100%",

            color: "#abdbe3",
          },
        }}
      ></Icon>
    </Box>
  );
}
