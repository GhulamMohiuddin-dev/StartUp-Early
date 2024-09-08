import React, { useEffect, useState, useContext } from 'react';
import { Box, Grid, Button } from '@mui/material';
import CustomCard from './CustomCard';
import { toast } from 'react-toastify';
import api, { setupInterceptors } from '../authentication/api';
import AuthContext from '../authentication/AuthContext';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');
    const { accessToken, refreshAccessToken } = useContext(AuthContext);
  
    useEffect(() => {
        setupInterceptors(accessToken, refreshAccessToken);
    
        const fetchEvents = async () => {
          try {
            const response = await api.get('events/all/');
            setEvents(response.data);
          } catch (error) {
            console.error('Failed to fetch events', error);
            toast.error('Failed to fetch events');
        }
        };
    
        fetchEvents();
      }, [accessToken, refreshAccessToken]);

      useEffect(()=>{
        if(events){
            setError(null)
        }
      },[events])

  return (
    <Box  sx={{
        paddingTop: '20px',
        paddingLeft: { xs: '20px', sm: '30px', md: '30px' },
        paddingRight: { xs: '20px', sm: '30px', md: '40px' },
        paddingBottom: { xs: '20px', sm: '30px', md: '40px' },
      }}>
      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <CustomCard
              image={event?.image}
              title={event?.title}
              startDate={event?.start_date}
              description={event?.detail}
            />
          </Grid>
        ))}
      </Grid>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: { xs: '30px', sm: '42px' } }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: '50px',
            borderColor: '#3D37F1',
            color: '#3D37F1',
            padding: { xs: '6px 18px', sm: '8px 24px' },
            fontWeight: 700,
            fontSize: { xs: '12px', sm: '14px' },
            '&:hover': {
              borderColor: '#3D37F1',
              backgroundColor: 'rgba(61, 55, 241, 0.1)',
            },
          }}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Events;
