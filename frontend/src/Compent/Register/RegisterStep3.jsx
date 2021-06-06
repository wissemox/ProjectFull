import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar ,Button } from '@material-ui/core'
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from '../../js/actions/authActions'
import {Redirect} from 'react-router-dom'
import RegisterStep4 from './RegisterStep4'
const RegisterStep3 = ({setRedirectRegister2}) => {
    // Get information
    const dispatch=useDispatch()
    const email =JSON.parse(localStorage.getItem('Email')) 
    const Prenom =JSON.parse(localStorage.getItem('Prenom')) 
    const name =JSON.parse(localStorage.getItem('name')) 
    const Nomcommunauté =JSON.parse(localStorage.getItem('Nomcommunauté')) 
    const password =JSON.parse(localStorage.getItem('password')) 
    var role = localStorage.getItem('role');
    const[Sexe , setSexe]=useState("")
    const[DateNaissance , setDateNaissance]=useState("")
    const[Photo , setPhoto]=useState("")
    const[adresse , setadresse]=useState("")
    const[pays , setpays]=useState("")
    const[ville , setville]=useState("")
    const RegisterUser =() =>{
    
        dispatch(registerUser({ prenom:Prenom,email:email, adresse:adresse ,tel:"string",pays:pays,ville:pays,nom:"string",code_postal:150, username:name,password:password , role:role ,nom_communaute:Nomcommunauté,sexe:Sexe,date_naissance:DateNaissance}))
    }
    const Goback =()=>{
        setRedirectRegister2(false)
    }
    const Redirect  = useSelector(state => state.authReducer.data)
    return (
        
        <>
        {Redirect ? <RegisterStep4/>:  <Box className=" w-15 h-720 BackgroundImageurl02 placeholder-blue-500">
             {console.log(email)}
                <Box data-Aos="fade"  className="mlp-50 Resposive flex-col	 flex">
                        <Typography data-Aos="fade" variant="p" className="pl-20 pt-10 pb-20 h-25  colorBplue font-medium 	text-2xl		" >INSCRIPATION</Typography>
                        
                            {/* Button */}
                        <input value={Sexe} onChange={(e)=>setSexe(e.target.value)} placeholder="Sexe" className="bg-white   w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                        <input value={DateNaissance} onChange={(e)=>setDateNaissance(e.target.value)} type="Date" placeholder="Date de naissance" className="bg-white  pl-10 w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                        <input type="file" placeholder="Sexe" className="bg-white  w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                        <input placeholder="Linkedin (ou autre)" className="bg-white  w-330 pladceholder h-40 mb-8  text-center	 rounded-full "/>
                        <Box className="flex bg-white w-330 rounded-full h-100   ">
                        <input value={adresse} onChange={(e)=>setadresse(e.target.value)} className="w-50 py-2 border-l	 rounded-full pl-5"   placeholder="Addred"/>
                        <input value={pays} onChange={(e)=>setpays(e.target.value)} className="w-50   pl-5 border-l border-black 	" placeholder="Ville"/>
                        <input value={ville} onChange={(e)=>setville(e.target.value)} className="w-50 rounded-r-full pl-5 border-l border-black		" placeholder="Pays"/>
                        </Box>
                        <Box className="flex  ml-12 mt-4">
                             <button className="bg-red text-white rounded-full w-90 mr-8 h-30  	" onClick={Goback} >Precedent</button>
                            <button  className="bg-red text-white rounded-full w-90 " onClick={RegisterUser}>Suivant</button> 
                        </Box>

                </Box>

             {/* Progress */}
                <Box className="ml-80 ResponsiveMargin h-1 pt-10">
                    {/* ml-80 */}
                    <Typography  className="colorBplue" variant="p">25% Accompli..</Typography>
                </Box>

                <Box className="absolute ResponsiveMargin ResposiveWidth AnimationProgresBar bg-Bluegr rounded-l-full w-600  mt-40 ml-80 h-35 ">
                    </Box>
                    <Box className="absolute flex ml-350 m-8 ">
                    <Box className="Box-Shadow bg-Bluegr colorBplue   w-55 text-center mr-40 ml-14 rounded-full shadow-lg		">
                    <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 ">1</Typography>
                    </Box>
                    <Box className="Box-Shadow bg-Bluegr colorBplue h-12  w-55 text-center mr-40 rounded-full 	">
                    <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >2</Typography>
                    </Box>
                    <Box className="Box-Shadow bg colorBplue bg-Bluegr w-55 text-center mr-40 rounded-full	">
                    <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >3</Typography>
                    </Box>
                    <Box className="Box-Shadow bg-bluelow colorBplue w-55 text-center rounded-full mr-40 shadow-lg	">
                    <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >4</Typography>
                    </Box>   
                </Box>
                    <Box className="ml-80  mt-10     bg-bluelow wp-50 rounded-full h-35"> 
                </Box>
        </Box>}
        
    </>
    )
}

export default RegisterStep3
