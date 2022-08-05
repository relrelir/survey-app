import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavigateButtonsStyle } from "../styles/global.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ArrowsNextBack({ handleNext, handleBack }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "200%",
      }}
    >
      <Button sx={NavigateButtonsStyle()} onClick={handleBack}>
        <ArrowBackIosIcon />
        Back
      </Button>
      <Button sx={NavigateButtonsStyle()} onClick={handleNext}>
        Next
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
}
