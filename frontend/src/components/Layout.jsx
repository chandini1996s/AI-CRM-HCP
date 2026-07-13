import Sidebar from "./Sidebar";
import Header from "./Header";

import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flex: 1 }}>
        <Header />

        <Box
          sx={{
            p: 4,
            background: "#f5f7fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            {children}
          </Box>

          {/* Footer */}
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
              color: "gray",
              fontSize: 14,
            }}
          >
            AI CRM HCP © 2026
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;