import { useState } from "react";
import api from "../api/axios";

import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Chat = () => {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const res = await api.post("/chat", null, {
        params: {
          message,
        },
      });

      const aiMessage = {
        sender: "ai",
        text: res.data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);

      setMessage("");

    } catch (err) {

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Error connecting to backend.",
        },
      ]);

    } finally {

      setLoading(false);

    }

  };

  return (
    <>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        AI CRM Chat
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 3,
          height: 420,
          overflowY: "auto",
        }}
      >

        {messages.map((msg, index) => (

          <Box
            key={index}
            sx={{
              mb: 2,
              textAlign:
                msg.sender === "user"
                  ? "right"
                  : "left",
            }}
          >

            <Typography
              sx={{
                display: "inline-block",
                p: 2,
                borderRadius: 2,
                bgcolor:
                  msg.sender === "user"
                    ? "#1976d2"
                    : "#eeeeee",
                color:
                  msg.sender === "user"
                    ? "white"
                    : "black",
                maxWidth: "70%",
              }}
            >

              {msg.text}

            </Typography>

          </Box>

        ))}

        {loading && (

          <Typography>

            🤖 AI is thinking...

          </Typography>

        )}

      </Paper>

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >

        <TextField
          fullWidth
          label="Ask AI..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <Button
          variant="contained"
          disabled={loading}
          onClick={sendMessage}
        >
          Send
        </Button>

      </Box>

    </>
  );

};

export default Chat;