import React,{useEffect , useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar  } from '@material-ui/core'
import { Input } from '@material-ui/core';
import RegisterStep2 from './RegisterStep2'
import Aos from 'aos'
import "aos/dist/aos.css"
import {Parallax} from 'react-parallax'

const Register = ({RedirectRegister,setRedirectRegister2 , RegisterFunction1,setRedirectRegister , RegisterFunction2,RedirectRegister2}) => {
    useEffect(() => {
        console.log('wissem')
     
        Aos.init({duration: 2000});
      }, [])
      const[filed , setfiled]=useState(false)
      const [ConfirmPassword02 , setConfirm02]=useState(false)
      const [EmailConfirm , setConfirmEmail]=useState(false)
      const [Input01 , setinput02]=useState(false)
      const [Input02 , setinput03]=useState(false)
      const [Input03 , setinput04]=useState(false)
      const [Input04 , setinput05]=useState(false)
      const [Input05 , setinput06]=useState(false)
      const [Nom , setNom]=useState("")
      const [Prenom , setPrenom]=useState("")
      const [Email , setEmail]=useState("")
      const [password , setpassword]=useState("")
      const [Confirmpassword , setConfirmPassword]=useState("")
      const NextStep =()=>{
        if(!Nom){
            setinput02(true)
        } if(Nom){
            setinput02(false)
        }
        if(!Prenom){
            setinput03(true)
        } if(Prenom){
            setinput03(false)
        }
        if(!Email){
            setinput04(true)
        } if(Email){
            setinput04(false)
        }
        if(!Email.includes('@')){
            setConfirmEmail(true)
        }
        if(Email.includes('@')){
            setConfirmEmail(false)
        }
        if(!password){
            setinput05(true)
         }
         if(password){
            setinput05(false)
         }
         if(!Confirmpassword){
            setinput06(true)
         }
         if(Confirmpassword){
            setinput06(false)
         }
         if(password===Confirmpassword){
            setConfirm02(false)
         }
         if(password!==Confirmpassword){
            setConfirm02(true)
         }
          if(!Nom || !Prenom || !Email|| password || Confirmpassword) {
            setfiled(true)
          }
          localStorage.setItem("name",  JSON.stringify(Nom));
          localStorage.setItem("Prenom",  JSON.stringify(Prenom));
          localStorage.setItem("Email",  JSON.stringify(Email));
          localStorage.setItem("password",  JSON.stringify(password));
        RegisterFunction1(Nom,Prenom,Email,password,Confirmpassword)
      }
    return (
     <>
     {RedirectRegister ? <RegisterStep2 setRedirectRegister2={setRedirectRegister2} RegisterFunction2={RegisterFunction2} RedirectRegister2={RedirectRegister2} setRedirectRegister={setRedirectRegister}/> : 
   
             <>
             <Parallax bgImage={"BackGroundImage5.gif"} strength={500}>
           <Box  className="BackgroundImageurl h-700  pt-10">
     <Box    className=" w-15  placeholder-blue-500 ">
           {/* font-size: 22px;
           BackGroundImage5
    font-weight: 500;
    height: 25px; */}
                    <Box  className="flex flex-center pt-10 mb-10 ">
                        <Box >
                        <Typography data-Aos="fade" variant="p" className="colorBplue Inscipation font-medium 	text-2xl		" >INSCRIPATION</Typography>
                        </Box>
                    </Box>

                <Box data-Aos="fade"  className="Resposive  flex flex-center">
                    
                    <Box>
                    {ConfirmPassword02&&<h6 className="absolute mt-80 w-330 text-center text-sm colorRed	"  data-Aos="fade">Password not the same</h6>}
                    <Box>
                    <input value={Nom} onChange={(e)=>setNom(e.target.value)}  data-Aos="fade-left"  placeholder="Nom" className="bg-white  w-330 pladceholder h-40 mb-8  text-center	 rounded-full 	"/>
                    </Box>
                    <Box>
                    {Input01 &&  <p className="h-5 colorRed absolute text-sm  text-center	w-330	mt-200">Entre all filed</p>}
                    </Box>
                    <Box>
                    <input value={Prenom} onChange={(e)=>setPrenom(e.target.value)} data-Aos="fade-left"  placeholder="Pernom" className="bg-white text-center   w-330 pladceholder h-40 mb-8   rounded-full 	"/>
                    </Box>
                    <Box>
                    {Input02 &&  <p className="h-5 colorRed absolute text-sm  text-center	w-330	mt-270">Entre all filed</p>}
                    <input value={Email} onChange={(e)=>setEmail(e.target.value)} data-Aos="fade-left"  placeholder="E-mail" className="bg-white text-center  w-330 pladceholder h-40  mb-8  rounded-full 	"/>
                    </Box>
                    <Box>
                    {Input03 &&  <p className="h-5 colorRed absolute text-sm  text-center	w-330	mt-340">Entre all Email</p>}
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} data-Aos="fade-left"  placeholder="Mod de pass" className="bg-white text-center w-330 pladceholder h-40  mb-8  rounded-full 	"/>
                    </Box>
                    <Box>
                    {Input04 &&  <p className="h-5 colorRed absolute text-sm  text-center	w-330	mt-410">Entre all filed</p>}
                    <input value={Confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}  data-Aos="fade-left"  placeholder="Confirm password" className="bg-white w-330 text-center pladceholder h-40   rounded-full 	"/>
                    </Box>
                    {Input05 &&  <p className="h-5 colorRed absolute text-sm  text-center	w-330	mt-410">Entre all filed</p>}
                    {/* Button */}
                    {console.log(RedirectRegister)}
                    </Box>
                   

                </Box>
                <Box className="flex  mt-10 flex-center">
                    <Box>
                    <button className="bg-Disbaled text-white rounded-full w-90 mr-8 h-30  	" >Precedent</button>
                    </Box>
                    <Box>
                        <button onClick={NextStep} className="bg-red text-white rounded-full w-90 ">Suivant</button>
                    </Box>
                </Box>
                {/* NavBarCharge */}
                <Box className="ml-80 ResponsiveMargin h-1 pt-10">
                    {/* ml-80 */}
                    <Container>
                    <Box className="flex flex-left "> 
                        <Box  className="ml-40">
                        <Typography  className="colorBplue" variant="p">25% Accompli..</Typography>
                        </Box>
                    </Box>
                    </Container>
                </Box>
                <Container>
                <Box className="flex flex-left">
                <Box style={{width:"150px"}} className="absolute  AnimationProgresBar bg-bluelow2 rounded-l-full  mt-40 ml-80 h-35 ">
                
                </Box>
                </Box>
                </Container>
                <Container>
                <Box className="bg-red flex flex-center ">
                <Box style={{marginTop:"30px"}} className="absolute flex  flex-center  wp-100 ">
                    <Box  className="Box-Shadow bg-bluelow2 colorBplue mr-12 ml-10  w-55 text-center   rounded-full shadow-lg		">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 ">1</Typography>
                    </Box>
                    <Box   className="Box-Shadow bg-bluelow colorBplue mr-12  h-12 w-55 text-center  rounded-full	">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >2</Typography>
                    </Box>
                    <Box  className="Box-Shadow bg colorBplue bg-bluelow  mr-12  w-55 text-center rounded-full	">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >3</Typography>
                    </Box>
                    <Box  className="Box-Shadow bg-bluelow colorBplue w-55 mr-12  text-center rounded-full  shadow-lg	">
                    <Typography variant="h5" style={{marginLeft:"10px" , marginTop:"6px"}} className="pt-1 bg-white rounded-full w-40 h-35 py-2 w-11 " >4</Typography>
                    </Box>
                    </Box>
                    
                </Box>
                </Container>
                
                <Container>
                <Box className="flex flex-center"> 
                <Box className="ml-70  mt-10     bg-bluelow wp-50 rounded-full h-35">
                       
                </Box>
                
                </Box>
                </Container>
               
        </Box> 
        </Box>
        </Parallax>
        </>
       }
        
        </>
    )
}

export default Register
