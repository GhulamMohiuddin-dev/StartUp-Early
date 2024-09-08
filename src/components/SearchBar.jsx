import React from "react";
import {
  Box,
} from "@mui/material";
import { EventFormControl } from "./EventFormControl";

const SearchBar = () => {
    const eventData = [
        { label: "Search Event", value: "Konser Jazz", marginRight: { xs: "0", sm: "60px" } },
        { label: "Place", value: "Indonesia", marginRight: { xs: "0", sm: "60px" } },
        { label: "Time", value: "AnyDate", marginRight: { xs: "0", sm: "16px" } },
      ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
        backgroundColor: "#2a2a72",
        padding: { xs: "20px", sm: "40px" },
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: { xs: "auto", sm: "140px" },
        gap: { xs: "20px", sm: "0px" },
      }}
    >
      {eventData.map((data, index) => (
        <EventFormControl
          key={index}
          label={data.label}
          value={data.value}
          marginRight={data.marginRight}
        />
      ))}
    </Box>
  );
};

export default SearchBar;
