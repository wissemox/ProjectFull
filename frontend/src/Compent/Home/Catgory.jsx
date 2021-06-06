import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import React,{useState} from 'react'
import CatgoryMap from './Map/CatgoryMap'
const Catgory = () => {
    const[Product , setProduct]=useState([{
    NameProuct:"Ordinater",
    Img:"kisspng-airpods-apple-headphones-iphone-sales-apple-airpods-bluetooth-telenor-nettbutikk-5bab7f85433541.5705478915379659572753.png"
    } , 
    {
    NameProuct:"Smartphone",
    Img:"pcApp.png"
    }, 
    {
    NameProuct:"pc Ordinateur",
    Img:"kisspng-airpods-apple-headphones-iphone-sales-apple-airpods-bluetooth-telenor-nettbutikk-5bab7f85433541.5705478915379659572753.png"
    },
    {
    NameProuct:"pc Ordinateur",
    Img:"Casque.png"
    }
])
    return (
        <Box>
            {/* Text */}
            <Container>
                <Box className="mt-10 mb-10 ml-41p">
                    <Typography className="colorBlue text-3xl font-medium" variant="p">Nos catégories</Typography>
                </Box>
            </Container>
        
                <Box className="displayflex ml-48 mb-100 mt-100">
                       {Product.map((el)=>
                       <CatgoryMap el={el}/>)}
                </Box>
                        
        </Box>
    )
}

export default Catgory
