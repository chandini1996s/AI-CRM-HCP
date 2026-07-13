import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        color: "black",
        boxShadow: 1,
      }}
    >
      <Toolbar>

        <Box sx={{ flexGrow: 1 }}>

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            AI CRM HCP
          </Typography>

          <Typography
            variant="body2"
            color="gray"
          >
            AI-powered Healthcare Professional Management System
          </Typography>

        </Box>

        <Typography color="gray">

          {today}

        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Header;