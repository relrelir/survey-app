import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import { Avatar, Badge, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import AppContext from "../contexts/AppContext.js";
import LoginButton from "./LoginButton.js";
import Logo from "./Logo";
import TabsHeader from "./TabsHeader";

export default function Header() {
  const { data: session } = useSession();
  const { isOpen, setIsOpen ,isMessegesOpen, setIsMessegesOpen} = useContext(AppContext);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 0 }}
    >
      <AppBar position="static" sx={{ background: "white", p: 0 }}>
        <Toolbar>
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          <TabsHeader />
          {session && (
            // <Button onClick={() => setIsOpen(true)}>
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
                    cursor: "pointer",
                  },
                }}
                src={session?.user.image}
              />
            </Stack>
            // </Button>
          )}
          {!session && <LoginButton />}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}

// const [anchorEl, setAnchorEl] = useState(null);
// const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

// const isMenuOpen = Boolean(anchorEl);
// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// const handleProfileMenuOpen = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleMobileMenuClose = () => {
//   setMobileMoreAnchorEl(null);
// };

// const handleMenuClose = () => {
//   setAnchorEl(null);
//   handleMobileMenuClose();
// };

// const handleMobileMenuOpen = (event) => {
//   setMobileMoreAnchorEl(event.currentTarget);
// };

// const menuId = "primary-search-account-menu";
// const renderMenu = (
//   <Menu
//     anchorEl={anchorEl}
//     anchorOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     id={menuId}
//     keepMounted
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     open={isMenuOpen}
//     onClose={handleMenuClose}
//   >
//     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//   </Menu>
// );

// const mobileMenuId = "primary-search-account-menu-mobile";
// const renderMobileMenu = (
//   <Menu
//     anchorEl={mobileMoreAnchorEl}
//     anchorOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     id={mobileMenuId}
//     keepMounted
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     open={isMobileMenuOpen}
//     onClose={handleMobileMenuClose}
//   >
//     <MenuItem>
//       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//         <Badge badgeContent={4} color="error">
//           <MailIcon />
//         </Badge>
//       </IconButton>
//       <p>messeges</p>
//     </MenuItem>
//     <MenuItem>
//       <IconButton
//         size="large"
//         aria-label="show 17 new notifications"
//         color="inherit"
//       >
//         <Badge badgeContent={17} color="error">
//           <NotificationsIcon />
//         </Badge>
//       </IconButton>
//       <p>Notifications</p>
//     </MenuItem>
//     <MenuItem onClick={handleProfileMenuOpen}>
//       <IconButton
//         size="large"
//         aria-label="account of current user"
//         aria-controls="primary-search-account-menu"
//         aria-haspopup="true"
//         color="inherit"
//       >
//         <AccountCircle />
//       </IconButton>
//       <p>Profile</p>
//     </MenuItem>
//   </Menu>
// );
