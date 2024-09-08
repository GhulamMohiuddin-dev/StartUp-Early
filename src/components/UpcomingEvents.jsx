import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const UpcomingEvents = () => {
  const DropdownBox = ({ label }) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F2F4FF",
          padding: "8px 16px",
          borderRadius: "50px",
          width: "auto",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#1D275F",
            marginRight: "30px",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          {label}
        </Typography>
        <IconButton sx={{ padding: "0", color: "#2a2a72" }}>
          <ArrowDropDownIcon />
        </IconButton>
      </Box>
    );
  };

  const dropdownData = ["Weekdays", "Event Type", "Any Category"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        padding: { xs: "5px", sm: "10px" },
        marginBottom: { xs: "10px", sm: "16px" },
        gap: { xs: "16px", sm: "0px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "20px", sm: "24px" },
          lineHeight: { xs: "28px", sm: "31.25px" },
          color: "#000606",
          textAlign: { xs: "center", sm: "left" },
          marginBottom: {xs: "10px", md:"0px"}
        }}
      >
        Upcoming Events
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: { xs: "10px", sm: "20px" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {dropdownData.map((item, index) => (
          <DropdownBox key={index} label={item} />
        ))}
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
