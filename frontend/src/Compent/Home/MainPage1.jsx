import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
const MainPage = () => {
    const [active , setactive]=useState(false)
    return (

        <Box className="w-15 bg-gray-100	h-720 ">
            <Container>
                {/* NavBar */}
                <Box className="flex  ml-20 pt-10 ">
               
                    <img className="w-190 imgResposive"   src="binpact002.png"/>
                 
                    <Box className="mt-20 ml-40 flex text-sm NavBarResposive	">
                    <Typography variant="p" className="pr-40">ACCEUIL</Typography>
                    <Typography  variant="p" className="pr-40">COMMENT CA MARCHE ? </Typography>
                    <Typography variant="p" className="pr-40">POURQOI BINPACT ?</Typography>
                    <Typography variant="p" className="pr-40">CATEGORIES</Typography>
                    <Typography variant="p" className="pr-40">COMMUNAUTES</Typography>
                   
                    </Box>

                    <Box  className="hidden pr-20 MenuResposive ml-45p">
                        <IconButton>
                        <MenuIcon/>
                        </IconButton>
                    </Box> 
                </Box>
                 <Container> {/* Title */}
                        <Box className="w-1100 tracking-widest ml-14 mt-180">
                        <h3 variant="h3" className="pr-40 font-medium tracking-widest leading-snug  text-5xl	">Troquez des produits de qualité
                        dans une communuté engagée</h3>
                        </Box>
                        {/* Resposinve in Progress */}
                        {/* Descraption */}
                        <Box className=" ml-14">
                            <p>Des Produits verifiés et validés par nos
                                experts! offre spéciale lancement , limtée 
                                aux 2000 premiers inscris</p>
                                <Box className="mt-8">
                                <Button className="rounded-full h-11 "  style={{backgroundColor:"#F1898C" , borderRadius:"20px",color:"white"}}>Bloquez vote place maintence</Button>
                                </Box>
                        </Box>
                        <Box boxShadow={2} className="h-20 rounded-full wp-100 	mt-12 flex  pl-10">
                            <Box className={`pt-4 pl-5  ${active ?"hidden":"flex"} text-sm `}>
                            <Typography className="pr-90" variant="p">Categories</Typography>
                            <Typography className="pr-90" variant="p">Sous catégorie</Typography>
                            <Typography className="pr-90" variant="p">Ville</Typography> 
                            <Typography className="pr-90" variant="p">Prix en binz</Typography>
                            <Typography className="pr-90" variant="p">Rating user</Typography>
                            <Typography className="pr-90" variant="p"> Catactéristique</Typography> 
                            </Box>

                            <Box className={`pt-4 ${active ?"flex":"hidden"} `}>
                            <Input className="w-1000 mb-3 mr-10"></Input>
                            </Box>
                        
                            <Box  onClick={()=>setactive(!active)} className={`bg-red rounded-full h-12 w-12 mt-4  ${active ? "Animationlogo" : "Animationlogo02"}`} > 
                            <img className="w-15 h-10 ml-1 mr-10 mt-1" src="TESt05zd.png"/>
                            </Box>
                     
                    </Box>
                </Container>  
            </Container>
        </Box>
    )
}

export default MainPage
