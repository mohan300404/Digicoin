import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext'
import axios from 'axios'
import { HistoricalChart } from '../config/api'
import { CircularProgress, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import {Chart as ChartJS} from 'chart.js/auto';
import { CategoryScale,LinearScale } from 'chart.js'
import { Line }from 'react-chartjs-2'
import { chartDays } from '../config/data'
import SelectButton from './SelectButton'

ChartJS.register(
  CategoryScale,
  LinearScale
);

const CoinInfo = ({coin}) => {

const [historicalData,setHistoricalData]=useState()
const [days,setDays]=useState(1)

const {currency}=CryptoState()

const fetchHistoricalData=async()=>{
  const {data}=await axios.get(HistoricalChart(coin.id,days,currency))

  setHistoricalData(data.prices)
}

useEffect(()=>{
  fetchHistoricalData();
},[currency,days])
console.log("data", historicalData)

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
      <div className='container2'>
      {
        !historicalData?(
          <CircularProgress
          style={{
            color:"gold"
          }}
          size={250}
          thickness={1}/>
        ):(
          <>
          <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

            datasets:[{
              data:historicalData.map((coin)=>coin[1]),
              label:`Price ( Past ${days} Days) in ${currency}`,
              borderColor:"#EEBC1D",
             
            },
          ],
          }}
          options={{
            elements:{
              point:{
                radius:1,
              }
            }
          }}
          />
        <div style={{
          display:"flex",
          marginTop:20,
          justifyContent:"space-around",
          width:"100%",
        }}>
          {chartDays.map(day=>(
              <SelectButton
                key={day.value}
                onClick={()=>setDays(day.value)}
                selected={day.value ===days}>
                {day.label}
              </SelectButton>
          ))}
        </div>

          </>

        )
      }

      </div>
    </ThemeProvider>
  )
}

export default CoinInfo