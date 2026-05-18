import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { styled, ThemeProvider, useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Button from "@mui/material/Button";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { dashboardTheme } from "../theme/dashboardTheme";

const drawerWidth = 240;

const dashboardNavItems = [
  {
    label: "Dashboard",
    title: "Dashboard",
    to: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Reports",
    title: "Reports",
    to: "/dashboard/reports",
    icon: AssessmentIcon,
  },
  {
    label: "Users",
    title: "Users",
    to: "/dashboard/users",
    icon: PeopleIcon,
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 999,
  backgroundColor: alpha(theme.palette.secondary.main, 0.14),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.22),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey[100],
  "& .MuiInputBase-input::placeholder": {
    color: alpha(theme.palette.common.white, 0.7),
    opacity: 1,
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const getPageTitle = (pathname) =>
  dashboardNavItems.find(({ to }) => to === pathname)?.title ?? "Welcome";

function DashLayoutInner() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const navigate = useNavigate();

  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const collapsedGutter = isSmUp
    ? `calc(${theme.spacing(8)} + 1px)`
    : `calc(${theme.spacing(7)} + 1px)`;
  const appBarLeftGutter = open ? `${drawerWidth}px` : collapsedGutter;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <CssBaseline />
      <MuiAppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          ml: appBarLeftGutter,
          width: `calc(100% - ${appBarLeftGutter})`,
          transition: theme.transitions.create(["width", "margin-left"], {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              mr: { xs: 2, md: 3 },
              color: "#e0f2fe",
              "&:hover": { bgcolor: alpha(theme.palette.secondary.main, 0.12) },
            }}
          >
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="subtitle1" component="span" sx={{ flexGrow: 1, letterSpacing: "0.12em", fontWeight: 600 }}>
            {pageTitle.toUpperCase()}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: 20, opacity: 0.9 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleLogout}
            sx={{
              ml: { xs: 1, md: 2 },
              px: 2,
              py: 0.75,
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </MuiAppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: open ? 'flex-end' : 'center' }}>
          {open ? (
            <IconButton onClick={handleDrawerClose} sx={{ color: 'text.primary' }} aria-label="Collapse navigation">
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          ) : null}
        </DrawerHeader>
        {open ? <Divider sx={{ borderColor: 'text.primary', borderBottomWidth: 2 }} /> : null}
        <List sx={{ px: 0.75, pt: 1 }}>
          {dashboardNavItems.map(({ label, to, icon: Icon }) => (
            <ListItem key={to} disablePadding sx={{ display: "block", mb: 0.25 }}>
              <ListItemButton
                component={Link}
                to={to}
                selected={location.pathname === to}
                sx={{
                  minHeight: 48,
                  borderRadius: "12px",
                  px: open ? 1.5 : 1,
                  justifyContent: open ? "flex-start" : "center",
                  overflow: "hidden",
                  gap: open ? 1 : 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: open ? "auto" : 0,
                    mr: open ? 0 : undefined,
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "inherit",
                  }}
                >
                  <Icon fontSize="small" />
                </ListItemIcon>
                {open ? (
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        fontSize: "0.8125rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      },
                    }}
                  />
                ) : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <DrawerHeader />
        <Box sx={{ px: { xs: 2, md: 3 }, pb: 4 }}>
          <Box
            sx={{
              border: "2px solid",
              borderColor: "text.primary",
              borderRadius: "1.5rem",
              bgcolor: "background.paper",
              px: { xs: 2, sm: 3 },
              py: { xs: 2.5, sm: 3 },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function DashLayout() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <DashLayoutInner />
    </ThemeProvider>
  );
}
