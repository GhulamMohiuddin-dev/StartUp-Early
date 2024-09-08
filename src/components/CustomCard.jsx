import React from "react";
import { CardContent } from "@mui/material";
import {
  StyledCard,
  StyledCardMedia,
  DateContainer,
  DateBox,
  DateMonth,
  DateNumber,
  ContentBox,
  TitleText,
  DescriptionText,
} from "../styles/styles";

const CustomCard = ({ image, title, startDate, description }) => {
  const dateObj = new Date(startDate);
  const date = dateObj.getDate();
  const month = dateObj
    .toLocaleString("default", { month: "short" })
    .toUpperCase();

  return (
    <StyledCard>
      <StyledCardMedia component="img" image={image} alt={title} />
      <CardContent>
        <DateContainer>
          <DateBox>
            <DateMonth variant="subtitle1">{month}</DateMonth>
            <DateNumber variant="h6">{date}</DateNumber>
          </DateBox>
          <ContentBox>
            <TitleText>{title}</TitleText>
            <DescriptionText>{description}</DescriptionText>
          </ContentBox>
        </DateContainer>
      </CardContent>
    </StyledCard>
  );
};

export default CustomCard;
