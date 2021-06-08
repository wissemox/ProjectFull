import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar  } from '@material-ui/core'
import MainPage from './MainPage1.jsx'
import Catgory from './Catgory'
import Nouveaute from './Nouveaute.jsx'
import Commentcamarche from './Commentcamarche.jsx'
//UPDATE
import MainPage2 from './MainPage2.jsx'
import EssayezBinpact from './EssayezBinpact'
import Buyers from './Buyers'
import Map from './Map'
const Home = () => {
  
    return (
        <>
        <MainPage/>
        <Catgory/>
        <Nouveaute/>
         <Commentcamarche/> 
        <MainPage2/> 
        <EssayezBinpact />
        <Buyers/>
        <Map/>
        {/* Update */}
        {/* <EssayezBinpact />
       
        <Buyers/>
        <Map/> */}
        </>
         
    )
}

export default Home
