import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'

const CatgoryMap = ({el}) => {
    return (
     
            <Box boxShadow={5} style={{width:"250px" , height:"300px"}} className="mr-10 mt-10">
                <Box className="mr-50 w-150">
                <img className="h-60 mt-4 mb-4 ml-14" src={`${el.Img}`}/>
                </Box>
                <Box >
                <Button className="w-250 text-white	 " style={{backgroundColor:"#2A6BB3"}}>Exchange</Button>
                </Box>
            </Box>
       
    )
}

export default CatgoryMap
