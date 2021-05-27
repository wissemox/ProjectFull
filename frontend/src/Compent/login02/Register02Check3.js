import React,{useState} from 'react'
import './RegisterCheck03.css'
import Register02Check4 from './Register02Check4'
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from '../../js/actions/authActions'
import { Redirect } from 'react-router'
import ModalChange from './ModalChange'
import ModalChangeUsername from './ModalUsername'
const Register02Check3 = ({Test05,setBolen02,Prevlise}) => {
 const email =JSON.parse(localStorage.getItem('Email')) 
 const Prenom =JSON.parse(localStorage.getItem('Prenom')) 
 const name =JSON.parse(localStorage.getItem('name')) 
 const Nomcommunauté =JSON.parse(localStorage.getItem('Nomcommunauté')) 
 const password =JSON.parse(localStorage.getItem('password')) 
 var role = localStorage.getItem('role');
 const Data = useSelector(state=>state.authReducer.data)
  const errors =  useSelector(state=>state.Errore.errors)
    {console.log(email)}
    const dispatch=useDispatch()
    const[Bolen03 , setBolen03]=useState(false)
    const[Sexe , setSexe]=useState("")
    const[DateNaissance , setDateNaissance]=useState("")
    const[Photo , setPhoto]=useState("")
    const[adresse , setadresse]=useState("")
    const[pays , setpays]=useState("")
    const[ville , setville]=useState("")
    
    const RegisterUser =() =>{
        Test05(Sexe,adresse,pays,ville,DateNaissance)
        dispatch(registerUser({ prenom:Prenom,email:email, adresse:adresse ,tel:"string",pays:pays,ville:pays,nom:"string",code_postal:150, username:name,password:password , role:role ,nom_communaute:Nomcommunauté,sexe:Sexe,date_naissance:DateNaissance}))
    }
   
    return (
        
        <>
        {console.log(Sexe)}
        {Data && <Redirect to="/Favoire"/>}
        {Bolen03 ?<Register02Check4/> :   <div  className="DisplayFlex4">
      
           <div data-Aos="fade" className="BakGroundLogin02d">
               <div className="Inspation">
                 
                    <div className="Inscripation">
                        <p data-Aos="fade-up">INSCRIPATION</p>
                        <div data-Aos="fade-left" >
                        <div className="Butadw">
                       <div className="Butadw02">
              
               </div>
               
               </div>
                            {/* Verfaction here */}
                            <div data-Aos="fade-up" className="ErroreDesign">
                            <h6 data-Aos="fade-up"> {errors&&errors.sexe}</h6>
                             <h6 data-Aos="fade-up"> {errors&&errors.username}</h6>
                             <h6 data-Aos="fade-up"> {errors&&errors.email}</h6>
                           
                            </div>
                            

                                <input value={Sexe} onChange={(e)=>setSexe(e.target.value)} placeholder="Sexe"/>
                            </div>
                            {console.log(Sexe)}
                            <div className="Date5" data-Aos="fade-left">
                                <input value={DateNaissance} onChange={(e)=>setDateNaissance(e.target.value)} type="date" placeholder="Date de naissance"/>
                            </div>
                            <div className="FileUpload5">
                           
                           <input class="form-control form-control-lg" id="formFileSm" type="file" />
                           </div>
                            <div data-Aos="fade-left">
                                <input  placeholder="Linkedin (ou autre)"/>
                            </div>
                        {console.log(errors)}
                       
                            <button/>
                        </div>
                       
                    </div>
                    <div className="Addresaa">
                        <div className="Address">
                        <input value={adresse} onChange={(e)=>setadresse(e.target.value)} placeholder="Address"/>
                        </div>
                        <div>
                        <input value={ville} onChange={(e)=>setville(e.target.value)} placeholder="Ville"/>
                        </div>
                        <div value={pays} onChange={(e)=>setpays(e.target.value)}  className="Pays">
                        <input placeholder="Pays"/>
                        </div>
                    </div>
                    
                <div className="FlexBox">
                    <button onClick={Prevlise} className="Precedent2">Precedent</button>
                   <button className="Suivant"  onClick={RegisterUser} >Suivant</button>
                  
                </div>
                    <div className="Accomplid">
                    <span>70% Accompli..</span>
                    </div>
                 
                <div className="AnimatedNumber">
                    
                        <div className="AniatedNumber1">
                            <p>1</p>
                        </div>
                        <div className="AniatedNumber2Bar">
                            <p>2</p>
                        </div>
                        <div className="AniatedNumber3Bar">
                            <p>3</p>
                        </div>
                        <div className="AniatedNumber4">
                            <p>4</p>
                        </div>
                       
                       
                    </div>
                    
                   
                <div className="Animation">
                    
                  <div  className="AnimatipnBackGroundBlue03">
                     
                  </div>
                </div>
           </div>
           {/* Flex here */}
           
        </div> }
     
        </>
    )
}

export default Register02Check3
