
import React,{useEffect , useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar ,Button } from '@material-ui/core'
import ModalComunite from '../Modal/ModelCommunite'
import {useDispatch , useSelector} from 'react-redux'
import {Getallcomunte} from '../../js/actions/authActions'
import RegisterStep3 from './RegisterStep3.jsx'
const RegisterStep2 = ({setRedirectRegister , RegisterFunction2,RedirectRegister2 ,setRedirectRegister2}) => {
    const dispatch =useDispatch()
    const [BackGroundChange , setBackGroundChange]=useState(false)
    
    const[Communte , setCommunte]=useState("")
    
    const[Entreprise , setEntreprise]=useState()
    const[input02 , setInput02]=useState(false)
    const[NomCommunte , setNomCommunte]=useState()
    const[Siret , setSiret]=useState()
    //  Return function
    const Presendnt =()=>{
        setRedirectRegister(false)
    }
    // Model function
    const SwitchBackGroundValue=()=>{
       
        setBackGroundChange(false)
    } 
    const SwitchBackGroundValue01=()=>{
       
        setBackGroundChange(true)
    } 
    // Get communte
    useEffect(()=>{
        dispatch(Getallcomunte()) 
    },[])
    // Onclick secture
    const Redirect03 =()=>{
        RegisterFunction2(Communte,Entreprise,Siret,NomCommunte)
        localStorage.setItem("Nomcommunauté",  JSON.stringify(NomCommunte));
        localStorage.setItem("sectur",  JSON.stringify(Communte));
        localStorage.setItem("Siret",  JSON.stringify(Siret));
        localStorage.setItem("nomentreprize",  JSON.stringify(Entreprise));
        if(!BackGroundChange){
            localStorage.setItem("role", "leader" );
        }
        if(BackGroundChange){
            localStorage.setItem("role", "membre" );
        }
    }
    return (
        // Register Step2
     
        <Box>
            {RedirectRegister2 ? <RegisterStep3 setRedirectRegister2={setRedirectRegister2}/> : 
    <Box className=" w-15 h-720 BackgroundImageurl01 placeholder-blue-500">
     
     <><Box data-Aos="fade"  className="mlp-50 Resposive flex-col	 flex">
            <Typography data-Aos="fade" variant="p" className="pl-20 pt-3 pb-10 h-25  colorBplue font-medium 	text-2xl		" >INSCRIPATION</Typography>
            
            <input value={NomCommunte} onChange={(e)=>setNomCommunte(e.target.value)} data-Aos="fade-left"  placeholder="Nom communauté" className="bg-white  w-330 pladceholder h-40 mb-8  text-center	 rounded-full 	"/>
            {/* Get Communite */}
            {console.log(NomCommunte)}
            {console.log(Communte)}
      <Box className="flex w-330 bg-white mb-8 h-12 Animation   rounded-full">
          <Box  style={{backgroundColor:BackGroundChange&&"#1C2D4F",color:BackGroundChange&&"white"}} className="rounded-l-full" onClick={SwitchBackGroundValue01} >
          <p className="w-165   	 pt-3   text-center"><ModalComunite setCommunte={setCommunte} Communte={Communte} BackGroundChange={BackGroundChange}/></p> 
          </Box>
          <Box onClick={SwitchBackGroundValue} className="rounded-r-full" style={{backgroundColor:!BackGroundChange&&"#1C2D4F",color:!BackGroundChange&&"#f4f4f4"}}>
          <p className="w-165 pt-3 text-center">Leader</p>
          </Box>
      </Box>
      
      {BackGroundChange ? <Box className="w-330 bg-white mb-8 h-10 rounded-full" > 
                        <p>{Communte&&Communte}</p>
                        </Box> :  <Box  >
                            
                        <input className="w-330 rounded-full h-10 mb-8 text-center	" value={Communte}  onChange={(e)=>setCommunte(e.target.value)} placeholder="Secteur"/>
                        
                        {input02&& 
                        <h6  data-Aos="fade">Entre your Communte</h6>} 
                        </Box>}
              <input className="w-330 rounded-full h-10 mb-8 text-center	" value={Siret}  onChange={(e)=>setSiret(e.target.value)} placeholder="Siret"/>
              <input placeholder="Upload"  className="bg-white  w-330 text-center pladceholder mb-10  rounded-full " id="formFileSm" type="file" />
              <input value={Entreprise} onChange={(e)=>setEntreprise(e.target.value)} data-Aos="fade-left"  placeholder="Nom entreprise" className="bg-white text-center w-330 pladceholder h-40  mb-8  rounded-full 	"/>
              <Box className="flex  ml-12 mt-10">
                    <button onClick={Presendnt} className="bg-red text-white rounded-full w-90 mr-8 h-30 	"  >Presdent</button>
                    <button  className="bg-red text-white rounded-full w-90" onClick={Redirect03}>Suivant</button>
               </Box>

  </Box>

    <Box className="ml-80 ResponsiveMargin h-1 pt-10">
        {/* ml-80 */}
        <Typography  className="colorBplue" variant="p">25% Accompli..</Typography>
    </Box>

  <Box className="absolute ResponsiveMargin ResposiveWidth AnimationProgresBar bg-Bluegr rounded-l-full w-330  mt-40 ml-80 h-35 ">
  
  </Box>
    <Box className="absolute flex ml-350 m-8 ">
                <Box className="Box-Shadow bg-Bluegr colorBplue   w-55 text-center mr-40 ml-14 rounded-full shadow-lg		">
                <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 ">1</Typography>
                </Box>
                <Box className="Box-Shadow bg-Bluegr colorBplue h-12  w-55 text-center mr-40 rounded-full 	">
                <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >2</Typography>
                </Box>
                <Box className="Box-Shadow bg colorBplue bg-bluelow w-55 text-center mr-40 rounded-full	">
                <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >3</Typography>
                </Box>
                <Box className="Box-Shadow bg-bluelow colorBplue w-55 text-center rounded-full mr-40 shadow-lg	">
                <Typography variant="h5" style={{marginLeft:"8px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >4</Typography>
                </Box>
    
    </Box>
  <Box className="ml-80  mt-10     bg-bluelow wp-50 rounded-full h-35">
         
  </Box> </>
{console.log(RedirectRegister2)}
  
</Box>}
             
        </Box>
    )
}

export default RegisterStep2
