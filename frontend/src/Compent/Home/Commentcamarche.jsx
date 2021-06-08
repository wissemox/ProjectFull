import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
const Commentcamarche = () => {
    return (
        <Container>
            <Box>
            <Box  className="mt-80  pl-3 flex flex-center">
                <Box>
                <Typography className="colorBlue text-2xl font-semibold	 " variant="p">Comment ca marche ? </Typography>
                </Box>
            </Box>
            </Box>
            <Box className="mt-2 pl-3 flex flex-center">
                <Box>
                    <Typography variant="p">C'est tres simple , juste quelques clics!</Typography>
                </Box>
            </Box>
            <Container>
                <Box className="mt-150">
                    <Box className="flex  mb-20 h-1   flex-center ">
                        <Box className="ml-25p mr-25p">
                        <MenuIcon     style={{fontSize:"50px" , color:"#EF797B",}}/>
                        </Box>
                        <Box className="mr-25p" >
                        <VerifiedUserIcon className="mr-20p"  style={{fontSize:"50px", color:"#EF797B"}}/>
                        </Box>
                        <Box className="mr-25p" >
                        <ExitToAppIcon   style={{fontSize:"50px", color:"#EF797B",marginRight:"20%"}}/>
                        </Box>
                        
                    </Box>
                </Box>
                {/*Tiltle*/}
            </Container>
            <Container>
                <Box className="flex  flex-center text-center font-bold  ml-10 text-lg NavBarResposive	">
                    <Box className="pr-4p"  >
                        <Typography  variant="p">Qu'est cequi vous fait plaisir ?</Typography>
                    </Box>
                    <Box className="pl-3p pr-4p" >
                         <Typography variant="p">Validez une prpossotition !</Typography>
                    </Box>
                    <Box  className="w-360" style={{paddingLeft:"2%"}}>
                        <Typography variant="p">Débarrassez-vous des produits qui ne 
                        vouss ervent a rient !</Typography>
                    </Box>
                </Box>
                  {/*Text*/}
                  <Box className="flex  flex-center   ml-10  text-center text-gray-400	f-12 NavBarResposive	">
                    <Box className="w-340" style={{paddingRight:"2%"}} >
                        <Typography  variant="p"><p>Vous avez besoin d'un objet pour 
                            vous , votre bureau ou pour vote maison , Choisissez la catégorie
                             et nous vous envoyons nos melleures propositions</p></Typography>
                    </Box>
                    <Box  className="w-360"  style={{paddingRight:"4%" }}>
                         <Typography variant="p">Dites-nous laquelle vou avec choisi et 
                         comment vous souhaitez receoir votre pack</Typography>
                    </Box>
                    <Box   className="w-360" style={{ paddingTop:"2%"}}>
                        <Typography variant="p">Nous avons tous quelque chose a offrir Regardez
                         bien autour de vous Vous pouvez nous payer avec un produit que vous
                          n'utlilsez plus !</Typography>
                    </Box>
                </Box>
            </Container>
          

        </Container>
    )
}

export default Commentcamarche
