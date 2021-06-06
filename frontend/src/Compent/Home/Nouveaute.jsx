import React from 'react'
import Carousel from 'react-elastic-carousel'
import CarouselMap from './Map/CarouselMap.jsx'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

const Nouveaute = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
        { width: 1600, itemsToShow: 5 },
      ];
      const Array=[{
        Image:"dzadzzd"
      },{
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },]
    return (
        <Box className="m-100">
            <Box className="mt-10 mb-10 ml-41p">
                <Typography className="colorBlue text-3xl font-medium" variant="p">Les nouveautés</Typography>
             </Box>
            <Carousel breakPoints={breakPoints}>
            {Array.map((el)=><CarouselMap el={el}/>)}
            </Carousel>
            
        </Box>
    )
}

export default Nouveaute
