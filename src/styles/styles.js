import { Card, Typography, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "18.95px",
  overflow: "hidden",
  width: "100%",
  maxWidth: "400px",
  height: "100%",
  maxHeight: "334.52px",
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "197.11px",
  objectFit: "cover",
  borderRadius: "18.95px 18.95px 0px 0px",
}));

export const DateContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: "8px",
}));

export const DateBox = styled(Box)(({ theme }) => ({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginRight: "12px",
}));

export const DateMonth = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "11.37px",
  lineHeight: "14.81px",
  color: "#3D37F1",
}));

export const DateNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "28.43px",
  lineHeight: "37.01px",
  color: "#000000",
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "4px",
  gap: "5px",
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "24px",
  color: "#000000",
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "21px",
  color: "#6A6A6A",
}));

