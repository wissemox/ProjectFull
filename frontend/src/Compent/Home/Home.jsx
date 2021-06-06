import React from 'react'
import {Container , Box , Typography , IconButton , AppBar  } from '@material-ui/core'
import MainPage from './MainPage1.jsx'
import Catgory from './Catgory'
import Nouveaute from './Nouveaute.jsx'
import Commentcamarche from './Commentcamarche.jsx'
const Home = () => {
    return (
        <>
        <MainPage/>
        <Catgory/>
        <Nouveaute/>
        <Commentcamarche/>
        </>
         
    )
}

export default Home
