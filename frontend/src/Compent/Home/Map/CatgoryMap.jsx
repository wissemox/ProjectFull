import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'

const CatgoryMap = ({el}) => {
    return (
     
            <Box boxShadow={5} style={{width:"250px" , height:"300px"}} className="mr-10 mt-10">
                <Box className="mb-20 mt-12 ml-10">
                <img  className="w-150 h-150" src={`${el.Img}`}/>
                </Box>
                <Box >
                <Button className="w-250 text-white	 " style={{backgroundColor:"#2A6BB3"}}>Exchange</Button>
                </Box>
            </Box>
       
    )
}

export default CatgoryMap
