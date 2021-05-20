import React,{useEffect , useState} from 'react'
import Register02Check2 from './Register02Check2'
import './login.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Register02 = ({Test05,Test04,Test03 , Bloena  , LengthBolen , setLengthBolen,Bloena02}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      const [Bolen , setBolen]=useState(false)
      const [Nom , setNom]=useState("")
      const [Prenom , setPrenom]=useState("")
      const [Email , setEmail]=useState("")
      const [password , setpassword]=useState("")
      const [Confirmpassword , setConfirmPassword]=useState("")
      const NextStep = () =>{
         localStorage.setItem("name",  JSON.stringify(Nom));
         localStorage.setItem("Prenom",  JSON.stringify(Prenom));
         localStorage.setItem("Email",  JSON.stringify(Email));
         localStorage.setItem("password",  JSON.stringify(password));
         setBolen(!Bolen)
      }
      const Verfaction =()=>{
        Test03(Nom,Prenom,Email,password,Confirmpassword)
        NextStep()
      }
     if(password.length>5){
        setLengthBolen(true)
     }
     else{
        setLengthBolen(false)
     }
    
    return (
        <>
        {console.log(LengthBolen)}
       
        {Bloena?<Register02Check2 Test05={Test05} Bloena02={Bloena02} Test04={Test04}/> :  <div  className="DisplayFlex2">
           <div data-Aos="fade" className="BakGroundLogin02">
               <div className="Inspation">
                    <div className="Inscripation">
                        <p data-Aos="fade-up">INSCRIPATION</p>
                            <div data-Aos="fade-left" >
                                {/* Verfaction Here */}
                              {!Nom || !Prenom || !Email || !password || !Confirmpassword ? <div data-Aos="fade">   
                                <h6 data-Aos="fade">Entre all filed</h6>
                              </div> :null }
                              {password!==Confirmpassword &&<div data-Aos="fade"> <h6 data-Aos="fade">Confirm Password</h6> </div> }
                              {!Email.includes('@') ?<h6 data-Aos="fade">Entre real email</h6>  :  null }
                            
                              {!LengthBolen && <div data-Aos="fade"> <h6>Modpass should be at lest 6 charchter</h6> </div>}
                                <input value={Nom} onChange={(e)=>setNom(e.target.value)} placeholder="Nom"/>
                            </div>
                            {console.log(Nom)}
                            <div  data-Aos="fade-left">
                                <input  value={Prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="Prenom"/>
                            </div>
                            <div data-Aos="fade-left">
                                <input value={Email} onChange={(e)=>setEmail(e.target.value)}  placeholder="E-mail"/>
                            </div>
                            <div data-Aos="fade-left">
                                <input value={password} onChange={(e)=>setpassword(e.target.value)}   placeholder="Mot de passe"/>
                            </div>
                            <div data-Aos="fade-left">
                                <input value={Confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value) } placeholder="Confirm password"/>
                            </div>
                            <button/>
                        </div>
                    </div>
                <div className="Daz">
                   <button onClick={Verfaction}>NEXT</button>
                  
                </div>
                    <div className="Accompli">
                    <span>25% Accompli..</span>
                    </div>
                 
                <div className="AnimatedNumber">
                    
                        <div className="AniatedNumber1">
                            <p>1</p>
                        </div>
                        <div className="AniatedNumber2">
                            <p>2</p>
                        </div>
                        <div className="AniatedNumber3">
                            <p>3</p>
                        </div>
                        <div className="AniatedNumber4">
                            <p>4</p>
                        </div>
                       
                       
                    </div>
                    
                   
                <div className="Animation">
                    
                  <div  className="AnimatipnBackGroundBlue">
                     
                  </div>
                </div>
           </div>
           {/* Flex here */}
           
        </div>}
      
        </>
    )
}

export default Register02 
