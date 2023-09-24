
import { Container, Typography } from '@mui/material';

import React from 'react'
import Carousel from './Carousel';



const Banner = () => {
    
  return (
    <div className='bannerContent'>
        <Container>
        <Typography className='tagline' variant='h2'> DigiCoin </Typography>
        <Typography variant='subtitle2' className='tagline1'>
            Get all the Info regarding your favourite crypto currencies
        </Typography>
          <Carousel />
        </Container>
    </div>
    
  )
}

export default Banner