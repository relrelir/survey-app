import Stack from "@mui/material/Stack";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Button from "@mui/joy/Button";
import { Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";

const guest = "Guest";
import { useSession } from "next-auth/react";

export default function Avater() {
  const { data: session, status } = useSession();
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        fontSize: 22,

        color: "#42A5F5",
        display: "flex",
        alignItems: "center",
        p: 1,
        m: 1,
        mr: 5,
        bgcolor: "grey",
        height: 100,
        borderRadius: 1,
      }}
    >
      <Box sx={{ pr: 2, fontSize: 22 }}>
        <Badge sx={{ fontSize: 22 }} badgeContent={10} color="error">
          <ForumTwoToneIcon fontSize="large" />
        </Badge>
      </Box>
      <Box sx={{ pr: 4, fontSize: 22 }}>
        <Badge badgeContent={11} color="error" sx={{ fontSize: 22 }}>
          <NotificationsTwoToneIcon fontSize="large" />
        </Badge>
      </Box>
    </Stack>
  );
}
