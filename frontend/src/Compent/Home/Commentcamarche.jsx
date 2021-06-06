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
                    <MenuIcon className="mr-400" style={{fontSize:"50px" , color:"#EF797B"}}/>
                    <VerifiedUserIcon  className="mr-400" style={{fontSize:"50px", color:"#EF797B"}}/>
                    <ExitToAppIcon  className="mr-400" style={{fontSize:"50px", color:"#EF797B"}}/>
                    
                </Box>
             
                {/* Title */}
                
            </Box>
            <Box  className="mt-20  flex text-sm NavBarResposive ">
                
                <p  className="w-400 text-lg font-medium	" >Qu'est ce qui vous fait plaisir ?</p>
                <p  className="ml-28 w-400 text-lg font-medium	">Validez un proposition</p>
                <p  className="ml-10 w-400 text-lg font-medium	">Debarrssez-vous des produits qui ne vous servent a rien !</p>
            </Box>
        </Container>
    )
}

export default Commentcamarche
