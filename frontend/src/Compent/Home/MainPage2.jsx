import React from 'react'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

const MainPage2 = () => {
    return (
        <Box style={{backgroundColor:"#F3F4F6"}} className=" flex mt-10">
            <Box className=" mb-10 mt-20p">
                <img className="w-600" src="Imageda.png"/>
            </Box>
            <Box className="ml-10p">
               <Box   className="text-2xl	w-350   mt-100">
               <Typography  className="font-bold  " variant="p"> Pourquoi essayer le troc de Binpact</Typography>
               <Box>

                <Box  className="text-sm mt-3 w-380	 text-gray-400	">
                <Typography variant="p">Si vous ne trouvez pas votre place , 
                on vous en offre une !</Typography>
                </Box>
                {/* 1 */}
                <Box className="flex">
                    <Typography variant="p">1</Typography>
                    <Typography variant="p">dzadazd</Typography>
                </Box>
            </Box>
            </Box>
            </Box>
          
        </Box>
    )
}

export default MainPage2
