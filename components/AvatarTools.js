import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { green, pink } from "@mui/material/colors";

import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { deepOrange } from "@mui/material/colors";
import Chip from "@mui/material/Chip";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Button from "@mui/joy/Button";
import Badge from "@mui/material/Badge";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const userName = null;
const guest = "Guest";
const userPicture = "";

export default function Avater() {
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

      <AccountCircleTwoToneIcon
        alt="Remy Sharp"
        src={userPicture}
        sx={{ width: 56, height: 56, fontSize: 22 }}
      />

      <Button variant="plain" sx={{ color: "grey", fontSize: 22 }}>
        <Typography sx={{ fontSize: 22 }} variant="h6">
          {userName ? userName : guest}
        </Typography>
        <ExpandMoreOutlinedIcon fontSize="small" />
      </Button>
    </Stack>
  );
}
