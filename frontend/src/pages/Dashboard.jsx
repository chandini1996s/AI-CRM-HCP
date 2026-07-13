import { useEffect, useState } from "react";
import api from "../api/axios";

import {
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChatIcon from "@mui/icons-material/Chat";

const Dashboard = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    meetings: 0,
    followups: 0,
    interactions: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await api.get("/dashboard");
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const cards = [
    {
      title: "Doctors",
      value: stats.doctors,
      icon: <PeopleIcon sx={{ fontSize: 45 }} />,
    },
    {
      title: "Meetings",
      value: stats.meetings,
      icon: <EventIcon sx={{ fontSize: 45 }} />,
    },
    {
      title: "Follow Ups",
      value: stats.followups,
      icon: <AssignmentIcon sx={{ fontSize: 45 }} />,
    },
    {
      title: "Interactions",
      value: stats.interactions,
      icon: <ChatIcon sx={{ fontSize: 45 }} />,
    },
  ];

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
              }}
            >
              {card.icon}

              <Typography
                variant="h6"
                sx={{ mt: 2 }}
              >
                {card.title}
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;