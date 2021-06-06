import React from 'react'
import {Container , Box , Typography , IconButton , AppBar, Button  } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
const Commentcamarche = () => {
    return (
        <Container>
            <Box className="mt-80 mb-10 ml-35p h-3">
                <Typography className="colorBlue text-2xl font-semibold	 mt-10" variant="p">Comment ca marche ? </Typography>
            </Box>
            <Box className="ml-36p">
                <Typography variant="p">C'est tres simple , juste quelques clics!</Typography>
            </Box>
            <Box className="mt-150">
                <Box className="flex h-1 ml-11p mb-20 justify-items-center">
                    <MenuIcon    className="mr-400" style={{fontSize:"50px" , color:"#EF797B"}}/>
                    <VerifiedUserIcon  className="mr-400" style={{fontSize:"50px", color:"#EF797B"}}/>
                    <ExitToAppIcon  className="mr-400" style={{fontSize:"50px", color:"#EF797B"}}/>
                    
                </Box>
             
                {/* Title */}
                
            </Box>
            <Box   className="mt-20 ml-5  flex  NavBarResposive 	 ">
                <Box  className="text-lg w-600 font-medium font-bold mr-20 ResposiveMenuIcon 	">
                <p>Qu'est ce qui vous fait plaisir ?</p>
                <Box className="text-center font-normal w-300 text-sm text-gray-400	">
                <p>Vous avez besion d'un objet
                     pour vous votre bureau ou 
                     pour votre maison. Choisissez 
                     la catégorie et nous vous 
                     envoyons nos meileures proppositions  </p>
                </Box>
        
                </Box>
                <Box  className="mr-20  w-500   ml-40 text-lg font-medium font-bold	 	">
                <p  >Validez un proposition</p>
                <Box className=" font-normal w-250 text-sm text-gray-400	">
                <p>Dites-nous laquelle vous avez 
                    choisi et comment vous souhaitez
                     recevoir pack ?  </p>
                </Box>
                </Box>
                <Box  className="text-lg w-500 font-medium font-bold  ResposiveExitToAppIcon	 ">
                <p>Debarrssez-vous des produits qui ne vous servent a rien !</p>
                <Box className=" font-normal w-250 text-sm text-gray-400	">
                <p>Dites-nous laquelle vous avez 
                    choisi et comment vous souhaitez
                     recevoir pack ?  </p>
                </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Commentcamarche
