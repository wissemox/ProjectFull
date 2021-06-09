import React,{useState ,useEffect} from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import Aos from 'aos'
import "aos/dist/aos.css"
const EssayezBinpact = () => {

   
  
        useEffect(() => {
          Aos.init({duration: 2000});
        }, [])
   
        const[Scroll , setScroll]=useState(false)
        const changeBackground =()=>{
            console.log(window.scrollY)
             if(window.scrollY>2400){
                setScroll(true)
            }else{
               setScroll(false)
            }
        }
        window.addEventListener('scroll' ,changeBackground )
        {console.log(Scroll)}
    return (
        <Box className="mt-60 mb-20 text-center			"> 
       
            <Box className="font-bold	 text-2xl">
            <Typography  variant="p">Essayez Binpact Gratuitement</Typography>
            </Box>
            <Box className="flex flex-center" >
                <Box  style={{width:"50%"}} className="font-semibold 	text-gray-400 mt-3 ">
                    <Typography variant="p">Bloquez un produit MAAINTENANT ! 
                    Offre limitée aux 2000 premiers iscrits</Typography>
                </Box>
            </Box>
            <Box   className="mt-8">
            
             <Button   className={`rounded-full h-11 ${Scroll&&"ButtonAnimation"}` } style={{backgroundColor:"#F1898C" , borderRadius:"20px",color:"white"}}>Bloquez vote place maintence</Button>
            </Box>
        </Box>
    )
}

export default EssayezBinpact
