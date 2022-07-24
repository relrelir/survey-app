import Stack from "@mui/material/Stack";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Button from "@mui/joy/Button";
import { Avatar, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import AppContext from "../contexts/AppContext";
import { useSession } from "next-auth/react";
import { useContext } from "react";
const guest = "Guest";

export default function AvatarTools() {
  const { isOpen, setIsMessegesOpen, isMessegesOpen, setIsOpen } =
    useContext(AppContext);
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
          <ForumTwoToneIcon
            onClick={() => setIsMessegesOpen(!isMessegesOpen)}
            fontSize="large"
          />
        </Badge>
      </Box>
      <Box sx={{ pr: 4, fontSize: 22 }}>
        <Badge badgeContent={11} color="error" sx={{ fontSize: 22 }}>
          <NotificationsTwoToneIcon fontSize="large" />
        </Badge>
      </Box>
      <Avatar
        onClick={() => setIsOpen(!isOpen)}
        alt="Remy Sharp"
        sx={{
          width: 80,
          height: 80,
          fontSize: 22,
          "&:hover": {
            boxShadow: "0px 8px 8px rgba(0.0, 0.0, 0.0, 0.7)",
            // opacity: [0.9, 0.9, 0.9],
            cursor: "pointer",
          },
        }}
        src={session?.user.image}
      />
    </Stack>
  );
}
