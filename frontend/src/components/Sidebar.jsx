import { Link, useLocation } from "react-router-dom";

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";

const Sidebar = () => {

  const location = useLocation();

  const menu = [
    {
      text: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      text: "AI Chat",
      path: "/chat",
      icon: <SmartToyIcon />,
    },
    {
      text: "History",
      path: "/history",
      icon: <HistoryIcon />,
    },
    {
      text: "Search",
      path: "/search",
      icon: <SearchIcon />,
    },
  ];

  return (
    <Box
      sx={{
        width: 250,
        background: "#1976d2",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
          py: 3,
          fontWeight: "bold",
        }}
      >
        AI CRM HCP
      </Typography>

      <List>
        {menu.map((item) => (

          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: "white",
              "&.Mui-selected": {
                background: "#1565c0",
              },
              "&.Mui-selected:hover": {
                background: "#1565c0",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />

          </ListItemButton>

        ))}
      </List>
    </Box>
  );
};

export default Sidebar;