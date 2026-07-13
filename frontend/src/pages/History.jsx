import { useEffect, useState } from "react";
import api from "../api/axios";

import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await api.get("/history");
      setHistory(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Interaction History
      </Typography>

      <Paper elevation={3}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell><b>Doctor</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Notes</b></TableCell>
              <TableCell><b>Follow Up</b></TableCell>
              <TableCell><b>Sentiment</b></TableCell>
              <TableCell><b>Created</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {history.map((item, index) => (

              <TableRow key={index}>

                <TableCell>{item.doctor_name}</TableCell>

                <TableCell>{item.interaction_type}</TableCell>

                <TableCell>{item.notes}</TableCell>

                <TableCell>{item.follow_up}</TableCell>

                <TableCell>{item.sentiment}</TableCell>

                <TableCell>
  {new Date(item.created_at).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>
      </Paper>
    </>
  );
};

export default History;