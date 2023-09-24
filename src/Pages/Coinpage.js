import React, { useEffect } from 'react'
import { useParams }from 'react-router-dom'
import  ReactHtmlParser from 'react-html-parser'
import axios from 'axios'
import { useState } from 'react'
import { SingleCoin } from '../config/api'
import CoinInfo from '../Components/CoinInfo'

import { CryptoState } from '../CryptoContext'
import { LinearProgress, Typography } from '@mui/material'
import { numberWithCommas } from '../Components/Banner/Carousel'


const Coinpage = () => {
 const {id} = useParams()
 const [coin,setCoin]=useState()

 const{currency,symbol}= CryptoState();




 const fetchCoin=async()=>{
  const {data}=await axios.get(SingleCoin(id))

  setCoin(data)
}
console.log(coin)
useEffect(()=>{
  fetchCoin();
},[])

if(!coin)return <LinearProgress style={{backgroundColor:"gold"}}></LinearProgress>

  return (
    <div className='container'>
      <div className='sidebar'>
        <img src={coin?.image.large} alt={coin?.name}
        height="200"
        style={{marginBottom:20}} />
        <Typography variant='h3' className='heading'>{coin?.name}</Typography>
        <Typography variant='subtitle1'
        className='description'>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
       

        <div className='marketdata'>

          <span style={{display:"flex"}}>
            <Typography variant='h5'>Rank:</Typography>
           
            <Typography variant='h5'
            style={{
              fontFamily:"Monsterrat",
            }} >{coin?.market_cap_rank}</Typography>
          </span>


          <span style={{display:"flex"}}>
            <Typography variant='h5'>Current Price:</Typography>
            &nbsp; &nbsp;
            <Typography variant='h5'
            style={{
              fontFamily:"Monsterrat",
            }} > {symbol}{" "}
            {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}</Typography>
          </span>


          <span style={{display:"flex"}}>
            <Typography variant='h5'>Market Cap:</Typography>
            &nbsp; &nbsp;
            <Typography variant='h5'
            style={{
              fontFamily:"Monsterrat",
            }} > {symbol}{" "}
            {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString()
            .slice(0,-6))}</Typography>
          </span>

        </div>
        </div>
      {/* chart */}
      <CoinInfo  coin={coin}/>
    </div>
    
  )
}

export default Coinpage