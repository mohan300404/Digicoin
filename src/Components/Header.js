import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Container, MenuItem, Select, Toolbar, Typography, createTheme } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CryptoState } from '../CryptoContext';

const Header = () => {

  const navigate= useNavigate();

  const {currency,setCurrency}=CryptoState();
  console.log(currency)
  const darkTheme=createTheme({
    palette:{
      primary:{
        main:"#fff",
      },
      mode: "dark",
    },
  })

  return (
  <ThemeProvider theme={darkTheme}>
  <AppBar color='transparent' position='static'>
    <Container>
      <Toolbar>
        <Typography onClick={()=> navigate("/")} className='title'>
          DigiCoin
        </Typography>

        <Select variant="outlined"
        style={{
          width:100,
          height:40,
          marginRight:15,
        }}
        value={currency}
        onChange={(e)=>setCurrency(e.target.value)}>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
        </Select>
      </Toolbar>
    </Container>
  </AppBar>
  </ThemeProvider>
  )
}

export default Header