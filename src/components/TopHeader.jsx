import React from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import icon from "../assets/downIcon.svg";
import person from '../assets/person.svg'

const TopHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "5px", sm: "10px", md: "15px" },
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "10px", sm: "0px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 400,
          fontSize: { xs: "18px", sm: "20px", md: "24px" },
          lineHeight: { xs: "24px", sm: "27px", md: "31.25px" },
          color: "#000606",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        Events
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          padding: { xs: "5px 10px", sm: "5px 20px 5px 5px" },
        }}
      >
        <Avatar
          alt="Alex Meian"
          src="./assets/person.svg"
          sx={{
            width: { xs: 30, sm: 40 },
            height: { xs: 30, sm: 40 },
            marginRight: { xs: "6px", sm: "8px" }, 
          }}
        />

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={{ xs: "8px", sm: "14px" }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "12px", sm: "14px" },
                lineHeight: { xs: "16px", sm: "18px" }, 
                marginBottom: "6px",
                color: "#292D32",
              }}
            >
              Alex Meian
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "10px", sm: "12px" },
                lineHeight: { xs: "13px", sm: "15px" },
                color: "rgba(41, 45, 50, 0.44)",
              }}
            >
              Product Manager
            </Typography>
          </Box>

          <IconButton
            sx={{
              padding: { xs: "4px", sm: "8px" },
            }}
          >
            <img src={icon} alt="Logos" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TopHeader;
