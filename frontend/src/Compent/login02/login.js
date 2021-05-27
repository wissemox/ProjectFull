import React,{useEffect , useState} from 'react'
import Register02Check2 from './Register02Check2'
import './login.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Register02 = ({setBolen,Prevlise,Test05,Test04,Test03  ,setBolen02, Bloena  , LengthBolen , setLengthBolen,Bloena02}) => {
    useEffect(() => {
        console.log('wissem')
     
        Aos.init({duration: 2000});
      }, [])
      const [Bolen , setBolen01A]=useState(false)
      const [Input01 , setinput02]=useState(false)
      const [Input02 , setinput03]=useState(false)
      const [Input03 , setinput04]=useState(false)
      const [Input04 , setinput05]=useState(false)
      const [Input05 , setinput06]=useState(false)
      {console.log(Bloena)}
      const [ConfirmPassword02 , setConfirm02]=useState(false)
      const [EmailConfirm , setConfirmEmail]=useState(false)
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
         setBolen01A(!Bolen)
      }
     
      const Verfaction =()=>{
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
       
        {Bloena?<Register02Check2 Prevlise={Prevlise} setBolen02={setBolen02} Bloena={Bloena} setBolen={setBolen} Test05={Test05} Bloena02={Bloena02} Test04={Test04}/> :  <div  className="DisplayFlex2">
           <div data-Aos="fade" className="BakGroundLogin02">
               <div className="Inspation">
                    <div className="Inscripation">
                        <p data-Aos="fade-up">INSCRIPATION</p>
                            <div data-Aos="fade-left" >
                                {/* Verfaction Here */}
                            
                            
                             
                                <input  style={{border:Input01&&'1px solid #C12026'  }} value={Nom} onChange={(e)=>setNom(e.target.value)} placeholder="Nom"/>
                              {Input01&&<h6  data-Aos="fade">Entre your Nom</h6>}  
                            </div>
                            {console.log(Nom)}
                            <div  data-Aos="fade-left">
                                <input style={{border:Input02&&'1px solid #C12026'  }} value={Prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="Prenom"/>
                                {Input02&&<h6  data-Aos="fade">Entre your Prenom</h6>}  
                            </div>
                            <div data-Aos="fade-left">
                                <input style={{border:Input03||EmailConfirm&&'1px solid #C12026'  }} value={Email} onChange={(e)=>setEmail(e.target.value)}  placeholder="E-mail"/>
                                {Input03&&<h6  data-Aos="fade">Entre your Email</h6>}
                                {/* EmailConfirm */}
                                {EmailConfirm&&<h6  data-Aos="fade">Entre real email</h6>}
                            </div>
                            <div data-Aos="fade-left">
                                <input style={{border:Input04&&'1px solid #C12026'  }} value={password} type="password" onChange={(e)=>setpassword(e.target.value)}   placeholder="Mot de passe"/>
                                {Input04&&<h6  data-Aos="fade">Entre your password</h6>}
                            </div>
                            <div data-Aos="fade-left">
                                <input value={Confirmpassword} style={{border:Input05&&'1px solid #C12026'  }}  type="password" onChange={(e)=>setConfirmPassword(e.target.value) } placeholder="Confirm password"/>
                                {ConfirmPassword02&&<h6  data-Aos="fade">Password not the same</h6>}
                               
                                {Input05&&<h6  data-Aos="fade">Password empty</h6>}
                            </div>
                                {console.log(password)}
                            <button/>
                        </div>
                    </div>
                <div className="FlexBox" >
                <button style={{cursor:"no-drop"}} className="Prescedent">Precedent</button>
                   <button  className="Suivant" onClick={Verfaction}>Suivant</button>
                  
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
