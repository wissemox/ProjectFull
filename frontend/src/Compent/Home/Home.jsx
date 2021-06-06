import React from 'react'
import {Container , Box , Typography , IconButton , AppBar  } from '@material-ui/core'
import MainPage from './MainPage1.jsx'
import Catgory from './Catgory'
import Nouveaute from './Nouveaute.jsx'
import Commentcamarche from './Commentcamarche.jsx'
import MainPage2 from './MainPage2.jsx'
const Home = () => {
    return (
        <>
        <MainPage/>
        <Catgory/>
        <Nouveaute/>
        <Commentcamarche/>
        <MainPage2/>
        </>
         
    )
}

export default Home
