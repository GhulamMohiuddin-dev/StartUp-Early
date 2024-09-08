import React from "react";
import { FormControl, Typography, Divider } from "@mui/material";

export const EventFormControl = ({ label, value, marginRight }) => {
  return (
    <FormControl sx={{ flex: 1, marginRight }}>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#fff",
          marginBottom: "8px",
          fontSize: { xs: "12px", sm: "14px" },
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: { xs: "16px", sm: "20px" },
        }}
      >
        {value}
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#fff",
          marginTop: "8px",
          height: "1px",
        }}
      />
    </FormControl>
  );
};

