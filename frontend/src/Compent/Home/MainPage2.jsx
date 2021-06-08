import React from 'react'
import {Container , Box , Typography , IconButton , AppBar,Button,Input  } from '@material-ui/core'

const MainPage2 = () => {
    return (
       <Box className="bg-gray-100 mt-40		">
            <Container>
                <Box className="flex flex-center ">
                    <Box className="NavBarResposive mt-20p wp-50 mb-5p" >
                        <img src="Imageda.png"/>
                    </Box>

                    <Box className="wp-80" >
                        <Box    style={{marginLeft:"10%"}} className=" mt-10 ">
                            <Box >
                            <Typography className="text-3xl	 font-bold 	" variant="p">Pourquoi essayer le troc de Binpact ? </Typography>
                            </Box>
                            <Box className="pt-2">
                            <Typography className="f-14" variant="p">Si vous trouvez pas votre place on vous en offre une ! </Typography>
                            </Box>

                        </Box>

                        <Box className="ResposiveMainPage2" style={{marginLeft:"10%"}} >
                            <Box className="flex mt-10">
                                <Box className="mt-2" style={{color:"#F1898C"} }>
                                    <Typography className="text-4xl font-semibold	" variant="p"> 1</Typography>
                                </Box>
                                <Box className="ml-14">
                                    <Box className="font-bold pb-2">
                                    <Typography  variant="p">Economisez de l'argent</Typography>
                                    </Box>
                                    <Box className="text-gray-400 f-12 wp-80	">
                                    <Typography variant="p"> Vous n'alles pas touchez 
                                    a vore proteteuille ni a votre carte bancaire Vous 
                                    faitez des econmies tous les mois nous calculons
                                    pour vouss prevle</Typography>
                                    </Box>
                                    </Box>   
                            </Box>


                            <Box className="flex mt-10 ">
                                <Box className="mt-2" style={{color:"#F1898C"} }>
                                    <Typography className="text-4xl font-semibold	" variant="p"> 2</Typography>
                                </Box>
                                <Box className="ml-14">
                                    <Box className="font-bold pb-2">
                                    <Typography  variant="p">Troquez avec toute conflance</Typography>
                                    </Box>
                                    <Box  className="text-gray-400  f-12 wp-80	">
                                    <Typography variant="p"> Des produits qui viement des 
                                    communautés reconne ds gens que vous connaissez peut etre qui ne peuvent pas vous armaquer Nous
                                     validons qui les
                                     produits de hauté qualité un sore est affecté a chaque produit et chaque triqueur</Typography>
                                    </Box>
                                    </Box>   
                            </Box>

                            <Box  className="flex mt-10 ">
                                <Box className="mt-2" style={{color:"#F1898C"} }>
                                    <Typography className="text-4xl font-semibold	" variant="p"> 3</Typography>
                                </Box>
                                <Box className="ml-14">
                                    <Box className="font-bold pb-2">
                                    <Typography  variant="p">On s'occupe de la logistique</Typography>
                                    </Box>
                                    <Box  className="text-gray-400  f-12 wp-80">
                                    <Typography variant="p"> Nous nous occupons de toute a logistique vous ne bougez qui le doig
                                     sur votre ordinateur Si vous etres pas satisi n
                                    ous pouvions remplacer votre produitspar un autre </Typography>
                                    </Box>
                                    </Box>   
                            </Box>

                            <Box   className="flex mt-10 mb-20 ">
                                <Box className="mt-2" style={{color:"#F1898C"} }>
                                    <Typography className="text-4xl font-semibold	" variant="p"> 4</Typography>
                                </Box>
                                <Box className="ml-14">
                                    <Box className="font-bold pb-2">
                                    <Typography  variant="p">Dashboard personlise</Typography>
                                    </Box>
                                    <Box   className="text-gray-400 f-12 wp-80" >
                                    <Typography variant="p"> Vous n'alles pas touchez 
                                    a vore proteteuille ni a votre carte bancaire Vous 
                                    faitez des econmies tous les mois nous calculons
                                    pour vouss prevle</Typography>
                                    </Box>
                                    </Box> 
                            </Box>  
                         </Box>
                        </Box>
                    </Box>
            </Container>
       </Box>
  
    )
}

export default MainPage2
