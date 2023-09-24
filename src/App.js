import {  BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
// import { makeStyles } from '@mui/styles/makeStyles';



function App() {

// const useStyles=makeStyles(()=>({
//   App:{
//     backgroundColor:"#14161a",
//     color:"white",
//     minHeigth:"100vh",
//   },
// }))

// const classes=useStyles()

  return (
    <BrowserRouter>
    <div className='App'>
    
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/coins/:id" element={<Coinpage />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
