import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import CatgoryMap from './Map/CatgoryMap'
import Aos from 'aos'
import "aos/dist/aos.css"
const Catgory = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
 
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
                <Box data-aos="fade-up-right" className=" flex flex-center mt-10">
                    <Box>
                    <Typography className="colorBlue text-3xl font-medium" variant="p">Nos catégories</Typography>
                    </Box>
                </Box>
            </Container>
        
                <Box data-aos="fade-up-right" className="displayflex Resposive mb-100 mt-100 ">
                       {Product.map((el)=>
                       <CatgoryMap el={el}/>)}
                </Box>
                        
        </Box>
    )
}

export default Catgory
