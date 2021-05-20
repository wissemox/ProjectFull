import React , {useState} from 'react'
import './RegisterChek02.css'
import Register02Check3 from './Register02Check3'
import {useForm} from "react-hook-form"
const Register02Check2 = ({Test05,Test04,Bloena02}) => {
    const [BackGroundChange , setBackGroundChange]=useState(false)
    const[Bollen02 , setBollen]=useState(false)
    const[Communte , setCommunte]=useState("")
    const[LeaderOrMember , setLeaderOrMember]=useState(Bollen02 ? "leader" :"Membre")
    const[sectur , setSectur]=useState("")
    const[Siret , setSiret]=useState("")
    const[NomEntreprize , setEntreprize]=useState("")
    const SwitchBackGroundValue=()=>{
       
        setBackGroundChange(!BackGroundChange)
    }
    const {register , handleSubmit}=useForm()
    const NextStep02 =()=>{
        Test04(Communte,sectur,Siret,NomEntreprize)
        localStorage.setItem("Nomcommunauté",  JSON.stringify(Communte));
        localStorage.setItem("sectur",  JSON.stringify(sectur));
        localStorage.setItem("Siret",  JSON.stringify(Siret));
        localStorage.setItem("nomentreprize",  JSON.stringify(NomEntreprize));
        if(!Bollen02){
            localStorage.setItem("role", "leader" );
        }
        if(Bollen02){
            localStorage.setItem("role", "membre" );
        }
        setBollen(!Bollen02)
    }
    return (
<>
        {console.log(LeaderOrMember)}
        {Bloena02 ?<Register02Check3 Test05={Test05}/> :  <div  className="DisplayFlex3">
           <div data-Aos="fade" className="BakGroundLogin02d">
               <div className="Inspation">
                    <div className="Inscripation">
                        <p data-Aos="fade-up">INSCRIPATION</p>
                        {!Communte || !sectur || !Siret || !NomEntreprize  ? <div data-Aos="fade" >   
                                <h6 data-Aos="fade">Entre all filed</h6>
                              </div> :null }
                            
                        <div data-Aos="fade-left" 
                        >
                                <input value={Communte} onChange={(e)=>setCommunte(e.target.value)} placeholder="Nom communauté"/>
                            </div>
                            <div data-Aos="fade-left" >
                               <div className="LederMember">
                                   <div style={{backgroundColor:BackGroundChange&&"#1C2D4F",color:BackGroundChange&&"white" }} onClick={SwitchBackGroundValue} className="Member">
                                        <p style={{fontSize:"15px"}}>Membre</p>
                                   </div>
                                   <div onClick={SwitchBackGroundValue} style={{backgroundColor:!BackGroundChange&&"#1C2D4F",color:!BackGroundChange&&"#f4f4f4"}} className="leader">
                                        <p style={{fontSize:"15px"}}>Leader</p>
                                   </div>
                                   
                               </div>

                            </div>
                            <div data-Aos="fade-left">
                                
                                <input  value={sectur} onChange={(e)=>setSectur(e.target.value)} placeholder="Sectur"/>
                            </div>
                            <div data-Aos="fade-left">
                                <input value={Siret} onChange={(e)=>setSiret(e.target.value)} placeholder="Siret"/>
                            </div>
                            <div className="FileUpload5">
                           
                            <input class="form-control form-control-smform-control form-control-lg" id="formFileSm" type="file" />
                            </div>
                            

                            <div data-Aos="fade-left">
                                <input value={NomEntreprize} onChange={(e)=>setEntreprize(e.target.value)}  placeholder="Nom entreprise"/>
                            </div>
                            <button/>
                        </div>
                    </div>
                <div className="Daz">
                   <button onClick={NextStep02} >NEXT</button>
                </div>
                    <div className="Accomplid">
                    <span>50% Accompli..</span>
                    </div>
                 
                <div className="AnimatedNumber">
                    
                        <div className="AniatedNumber1">
                            <p>1</p>
                        </div>
                        <div className="AniatedNumber2Bar">
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
                    
                  <div  className="AnimatipnBackGroundBlue02">
                     
                  </div>
                </div>
           </div>
           {/* Flex here */}
           
        </div>}
      
        </>
    )
}

export default Register02Check2
