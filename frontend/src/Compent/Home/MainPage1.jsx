import React,{useState , useEffect} from 'react'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Parallax} from 'react-parallax'
import Aos from 'aos'
import "aos/dist/aos.css"
const MainPage = () => {
    
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
 
    const [active , setactive]=useState(false)
    const[Menu , setMenud]=useState(false)
    const[Scroll , setScroll]=useState(false)
    const changeBackground =()=>{
        console.log(window.scrollY)
        if(window.scrollY>200){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    window.addEventListener('scroll' ,changeBackground )
    {console.log(Scroll)}
    return (
        <>
        <Parallax className="ParallaxResposive1400widht"  bgImage={"Untitled-2.jpg"} strength={600}> 
        <Box className="w-15  	h-720 ">
           
                {/* NavBar */}
                   <AppBar data-aos="fade" style={{backgroundColor:"transparent",boxShadow:"none"}} position={`${Scroll&&"fixed"}`} className={`${Scroll && "AnimaiionNavbarSticky"} ${Scroll && "bg-white"}  `}>
                        <Box data-aos="fade-up-right" className="flex  ml-20 pt-10 flex-center  ">
                        <Box>
                        {!Scroll ?     <img  className="w-190 imgResposive"   src="Binpactwhite.png"/> :  <img  className="w-190 imgResposive"   src="binpact002.png"/>}
                        </Box>
                        <Box className={`mt-20 ml-40 flex text-sm NavBarResposive  ${Scroll ?"text-gray-500	":"text-white"}  `}>
                        <Typography data-aos="fade" variant="p" className="pr-40">ACCEUIL</Typography>
                        <Typography data-aos="fade"  variant="p" className="pr-40">COMMENT CA MARCHE ? </Typography>
                        <Typography data-aos="fade" variant="p" className="pr-40">POURQOI BINPACT ?</Typography>
                        <Typography data-aos="fade" variant="p" className="pr-40">CATEGORIES</Typography>
                        <Typography data-aos="fade" variant="p" className="pr-40">COMMUNAUTES</Typography>
                    
                        </Box>
                        <Box style={{width:"80%"}} className="hidden flex  mt-3	   MenuResposive  text-left">
                       
                       <MenuIcon onClick={()=>setMenud(!Menu)} style={{marginLeft:"80%"}} className={`${Scroll ?"text-gray-500	":"text-white"} `}/>
                       
                  
                     
                        </Box> 
                        </Box>

                   
                     
                    </AppBar>
                    <Container>
                        {Menu&&
                         <Box  boxShadow={5}  className="bg-gray-100 h-200 AnimaionNavbar rounded-2xl text-white			 ml-360 absolute w-150 text-center	 ">
                             <Box className="mb-2 bg-Hover mt-2">
                               <Typography className="text-sm color-r w-50" variant="p" >ACCEUIL</Typography>
                               </Box>
                               <Box  className="mb-2 bg-Hover">
                                <Typography className="text-sm color-r" variant="p">CATEGORIES</Typography>
                                </Box>
                                <Box  className="mb-2 bg-Hover">
                                <Typography className="text-sm color-r" variant="p" >COMMUNAUTES</Typography>
                                </Box>
                                <Box className="w-100 mb-2 bg-Hover">
                                <Typography className="text-sm color-r " variant="p" >POURQOI BINPACT </Typography>
                                </Box>
                                <Box className="w-100 mb-2 bg-Hover">
                                    <Typography   className="text-sm color-r"  variant="p"> COMMENT CA MARCHE </Typography>
                                </Box>
                            </Box>}
                     
                 <Container> {/* Title */}
                        <Box className="ml-3p">
                            <Box  className="tracking-widest ml-40 wp-100  mr-40 mt-180">
                                <Box  data-aos="fade-down-left"  className="flex">
                                    <h3   variant="h3" className="pr-40 font-medium tracking-widest leading-snug  ml-3p text-5xl text-white">Troquez des produits de qualité
                                    dans une communuté engagée</h3>
                                </Box>
                            </Box>
              
                            {/* Descraption */}
                            <Box data-aos="fade-left"  className=" ml-20 text-white wp-70	">
                                <p>Des Produits verifiés et validés par nos
                                    experts! offre spéciale lancement , limtée 
                                    aux 2000 premiers inscris</p>
                                    <Box className="mt-8">
                                    <Button className="rounded-full h-11 "  style={{backgroundColor:"#F1898C" , borderRadius:"20px",color:"white"}}>Bloquez vote place maintence</Button>
                                    </Box>
                            </Box>
                            {/* Mobile resposive show reserche bar */} 
                           {/* style={{justifyContent:"flex-end"}}  */}
                                <Box  className="bg-red items-end ResercherResposiveMobile	hidden  m-3 bg-white rounded-full mt-5  flex opacity-90 ">
                                    <Box className="wp-90">
                                        <Input className="ml-5 wp-90" />
                                    </Box>
                                    <Box     className="py-2 pr-2  flex wp-10 flex-left">
                                        <Box>
                                        <SearchIcon />
                                        </Box>
                                    </Box>
                                  
                            </Box>
                         
                             </Box>
                        <Box boxShadow={2} className=" rounded-full  HaideResercheBar	mt-12 flex opacity-90	  bg-white">
                            <Box style={{height:"30px" , justifyContent:"start" , marginTop:"2%"}} className={`   ${active ?"hidden":"flex"} `}>
                                <Box className="ml-5 fontResposive flex paddinTopResposive"  >
                                <Box className="mt-1">
                                <Typography className="pr-90" variant="p">Categories</Typography>
                                </Box>
                                <Box className="mt-1">
                                <Typography className="pr-90" variant="p">Sous catégorie</Typography>
                                </Box>
                                <Box className="mt-1">
                                <Typography className="pr-90" variant="p">Ville</Typography> 
                                </Box>
                                <Box className="mt-1">
                                <Typography className="pr-90" variant="p">Prix en binz</Typography>
                                </Box>
                                <Box className="mt-1">
                                <Typography className="pr-90" variant="p">Rating user</Typography>
                                </Box >
                                <Box className="mt-1">
                                <Typography className="pr-90" variant="p"> Catactéristique</Typography> 
                                </Box>
                                </Box>
                            </Box>
                          
               
                              
                           
                            <Box className={`pt-4 ${active ?"flex":"hidden"} `}>
                            <Input className="w-1000 mb-3 mr-10"></Input>
                            </Box>
                        
                            <Box  onClick={()=>setactive(!active)} className={`bg-red rounded-full h-12 w-12 mt-3 mb-2 justify-center	  ${active ? "Animationlogo" : "Animationlogo02"}`} > 
                            <img className="w-15 h-10 ml-1 mr-10 mt-1" src="TESt05zd.png"/>
                            </Box>
                     
                    </Box>
                </Container>  
            </Container>
        </Box>
        </Parallax>



{/* 600 RESPOSIVE */}
<Parallax className="ParallaxResposive hidden"  bgImage={"Untitled-1.jpg"} strength={600}> 
<Box className="w-15  	h-720 ">
    <Container>
        {/* NavBar */}
            <AppBar data-aos="fade" style={{backgroundColor:"transparent",boxShadow:"none"}} position={`${Scroll&&"fixed"}`} className={`${Scroll && "AnimaiionNavbarSticky"} ${Scroll && "bg-white"}  `}>
            <Box  className="flex  ml-20 pt-10 ">
            {!Scroll ?     <img  className="w-190 imgResposive"   src="Binpactwhite.png"/> :  <img  className="w-190 imgResposive"   src="binpact002.png"/>}
           
         
            <Box className="mt-20 ml-40 flex text-sm NavBarResposive  text-white 		">
            <Typography variant="p" className="pr-40">ACCEUIL</Typography>
            <Typography  variant="p" className="pr-40">COMMENT CA MARCHE ? </Typography>
            <Typography variant="p" className="pr-40">POURQOI BINPACT ?</Typography>
            <Typography variant="p" className="pr-40">CATEGORIES</Typography>
            <Typography variant="p" className="pr-40">COMMUNAUTES</Typography>
           
            </Box>
           
                            
            <Box    style={{width:"100%"}} className="hidden flex 	   MenuResposive  text-left">
               
                <MenuIcon   onClick={()=>setMenud(!Menu)} style={{marginLeft:"80%"}} className={`${Scroll ?"text-gray-500	":"text-white"}`}/>
                
           
              
            </Box> 
             
            </Box>
            </AppBar>
                {Menu&&
                 <Box  boxShadow={5}  className="bg-gray-100 h-200 AnimaionNavbar rounded-2xl text-white			 ml-360 absolute w-150 text-center	 ">
                     <Box className="mb-2 bg-Hover mt-2">
                       <Typography className="text-sm color-r w-50" variant="p" >ACCEUIL</Typography>
                       </Box>
                       <Box  className="mb-2 bg-Hover">
                        <Typography className="text-sm color-r" variant="p">CATEGORIES</Typography>
                        </Box>
                        <Box  className="mb-2 bg-Hover">
                        <Typography className="text-sm color-r" variant="p" >COMMUNAUTES</Typography>
                        </Box>
                        <Box className="w-100 mb-2 bg-Hover">
                        <Typography className="text-sm color-r " variant="p" >POURQOI BINPACT </Typography>
                        </Box>
                        <Box className="w-100 mb-2 bg-Hover">
                            <Typography   className="text-sm color-r"  variant="p"> COMMENT CA MARCHE </Typography>
                        </Box>
                    </Box>}
             
         <Container> {/* Title */}
                <Box data-aos="fade-down-left" className="ml-3p">
                    <Box   className="tracking-widest ml-40 wp-100  mr-40 mt-180">
                        <Box   className="flex">
                            <h3  variant="h3" className="pr-40 font-medium tracking-widest leading-snug  ml-3p text-5xl text-white">Troquez des produits de qualité
                            dans une communuté engagée</h3>
                        </Box>
                    </Box>
      
                    {/* Descraption */}
                    <Box  className=" ml-20 text-white wp-70	">
                        <p>Des Produits verifiés et validés par nos
                            experts! offre spéciale lancement , limtée 
                            aux 2000 premiers inscris</p>
                            <Box className="mt-8">
                            <Button className="rounded-full h-11 "  style={{backgroundColor:"#F1898C" , borderRadius:"20px",color:"white"}}>Bloquez vote place maintence</Button>
                            </Box>
                    </Box>
                    {/* Mobile resposive show reserche bar */} 
                   {/* style={{justifyContent:"flex-end"}}  */}
                        <Box  className="bg-red items-end ResercherResposiveMobile	hidden  m-3 bg-white rounded-full mt-5  flex opacity-90 ">
                            <Box className="wp-90">
                                <Input className="ml-5 wp-90" />
                            </Box>
                            <Box     className="py-2 pr-2  flex wp-10 flex-left">
                                <Box>
                                <SearchIcon />
                                </Box>
                            </Box>
                          
                    </Box>
                 
                     </Box>
                <Box boxShadow={2} className=" rounded-full  HaideResercheBar	mt-12 flex opacity-90	  bg-white">
                    <Box style={{height:"30px" , justifyContent:"start" , marginTop:"2%"}} className={`   ${active ?"hidden":"flex"} `}>
                        <Box className="ml-5 fontResposive flex paddinTopResposive"  >
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Categories</Typography>
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Sous catégorie</Typography>
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Ville</Typography> 
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Prix en binz</Typography>
                        </Box>
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p">Rating user</Typography>
                        </Box >
                        <Box className="mt-1">
                        <Typography className="pr-90" variant="p"> Catactéristique</Typography> 
                        </Box>
                        </Box>
                    </Box>
                  
       
                      
                   
                    <Box className={`pt-4 ${active ?"flex":"hidden"} `}>
                    <Input className="w-1000 mb-3 mr-10"></Input>
                    </Box>
                
                    <Box  onClick={()=>setactive(!active)} className={`bg-red rounded-full h-12 w-12 mt-3 mb-2 justify-center	  ${active ? "Animationlogo" : "Animationlogo02"}`} > 
                    <img className="w-15 h-10 ml-1 mr-10 mt-1" src="TESt05zd.png"/>
                    </Box>
             
            </Box>
        </Container>  
    </Container>
</Box>
</Parallax>
</>
    )
}

export default MainPage
