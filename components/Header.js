import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AvatarTools from "../Components/AvatarTools.js";
import TabsHeader from "./TabsHeader";
import Logo from "./Logo";
import LoginButton from "./LoginButton.js";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  color: "grey",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const { data: session, status } = useSession();
  // const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <Box>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <Logo />

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <TabsHeader />
            {session && (
              // <Button onClick={() => setIsOpen(true)}>
              <AvatarTools />
              // </Button>
            )}
            {!session && <LoginButton />}
          </Box>
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
