import { useState } from "react";
import api from "../api/axios";

import {
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";

const Search = () => {
  const [doctor, setDoctor] = useState("");
  const [results, setResults] = useState([]);

  const searchDoctor = async () => {
    try {
      const res = await api.get("/search", {
        params: {
          doctor_name: doctor,
        },
      });

      setResults(res.data);
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
        Search Doctor
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          fullWidth
          label="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={searchDoctor}
        >
          Search
        </Button>
      </Box>

      <Paper elevation={3}>
        <Table>

          <TableHead>

            <TableRow>
              <TableCell><b>Doctor</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Notes</b></TableCell>
              <TableCell><b>Follow Up</b></TableCell>
            </TableRow>

          </TableHead>

          <TableBody>

            {results.map((item, index) => (

              <TableRow key={index}>

                <TableCell>{item.doctor_name}</TableCell>

                <TableCell>{item.interaction_type}</TableCell>

                <TableCell>{item.notes}</TableCell>

                <TableCell>{item.follow_up}</TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>
      </Paper>
    </>
  );
};

export default Search;