import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'

const Buyers = () => {
    return (
        <Box className="mt-4" style={{backgroundColor:"#F3F4F6" , height:"500px"}}>
           {/**/}
           <Box className="flex font-bold	text-3xl	  flex-center">
               <Box className="mt-10">
                    <Typography variant="p">Buyers about product</Typography>
               </Box>
           </Box>
           <Box className="flex 	text-base		  flex-center">
               <Box  className="mt-4 wp-50 text-center	text-gray-400	">
                    <Typography variant="p">dazdadazdazdadazdazd aadqzdqdzzdqd
                     dqzddzazdazdzdqzd qzdqzdqzd qzdqzd zdqdqzdqzd 
                     zqdazdazdaz azdazd</Typography>
               </Box>
           </Box>
             {/*Photo hHERE*/}
           <Container>
               <Box className="flex flex-center mt-40">
                  <Box style={{marginLeft:"14%" , marginTop:"5%"}} className="mr-15p">
                  <img src="im1.png"/>
                  </Box>
                    <Box style={ {marginTop:"5%"}}  className="mr-15p">
                    <img src="im2.png"/>
                    </Box>
                      <Box style={{ marginTop:"5%"}} className="mr-15p"> 
                      <img src="im3.png"/>
                      </Box>
                        
                   
               </Box>
           </Container>
        </Box>
    )
}

export default Buyers
