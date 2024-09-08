import React from 'react';
import { Box, Container,useTheme, useMediaQuery } from '@mui/material';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';


const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", marginRight: isMobile && "30px"}}>
      <Sidebar />
      <Container
        component="main"
            maxWidth={false}
            sx={{
                overflow: 'hidden',
                width: "100%",
                marginLeft: { xs: 0, md: '160px' },
              }}
      >
        <MainContent />
      </Container>
    </Box>
  );
}

export default Dashboard;
