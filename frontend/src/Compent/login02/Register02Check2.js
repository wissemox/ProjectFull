import React , {useState , useEffect} from 'react'
import './RegisterChek02.css'
import Register02Check3 from './Register02Check3'
import {useForm} from "react-hook-form"
import {useDispatch , useSelector} from 'react-redux'
import {Getallcomunte} from '../../js/actions/authActions'
import MapComunte from './MapComunte'
import ModalComunite from './ModelCommunite'

const Register02Check2 = ({Prevlise,Test05,Test04,Bloena02, setBolen02,setBolen , Bloena}) => {
    const dispatch =useDispatch()
    const [BackGroundChange , setBackGroundChange]=useState(false)
    const[Bollen02 , setBollen]=useState(false)
    const[Communte , setCommunte]=useState("")
    const[LeaderOrMember , setLeaderOrMember]=useState(Bollen02 ? "leader" :"Membre")
    const[sectur , setSectur]=useState("")
    const[Siret , setSiret]=useState("")
    const[NomEntreprize , setEntreprize]=useState("")
    const[input01 , setInput01]=useState(false)
    const[input02 , setInput02]=useState(false)
    const[input03 , setInput03]=useState(false)
    const[Test , setTest]=useState()
    const SwitchBackGroundValue=()=>{
       
        setBackGroundChange(false)
    } 
    const SwitchBackGroundValue01=()=>{
       
        setBackGroundChange(true)
    } 
    useEffect(()=>{
        dispatch(Getallcomunte()) 
    },[])
    const precedent =()=>{
        setBolen(false)
    }
    // Getallcomunte
    const ComunteAll = useSelector(state => state.ComunteReducer)
    
    {console.log(Test)}
    const {register , handleSubmit}=useForm()
    const NextStep02 =()=>{
        if(!sectur){
            setInput01(true)
        } if(sectur){
            setInput01(false)
        }
        if(!Communte){
            setInput02(true)
        } if(Communte){
            setInput02(false)
        }
        if(!Siret){
            setInput03(true)
        } if(Siret){
            setInput03(false)
        }
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
        {Bloena02 ?<Register02Check3 Prevlise={Prevlise} setBolen02={setBolen02} Test05={Test05}/> :  <div  className="DisplayFlex3">
           <div data-Aos="fade" className="BakGroundLogin02d">
             
               <div className="Inspation">
                    <div className="Inscripation">
                        <p data-Aos="fade-up">INSCRIPATION</p>
                        {!Communte || !sectur || !Siret || !NomEntreprize  ? <div data-Aos="fade" >   
                                <h6 data-Aos="fade">Entre all filed</h6>
                              </div> :null }
                            
                              <div data-Aos="fade-left">
                                
                                <input style={{border:input01&&'1px solid #C12026'  }}  value={sectur} onChange={(e)=>setSectur(e.target.value)} placeholder="Sectur"/>
                                {input01&&<h6   data-Aos="fade">Entre your Secture</h6>}  
                            </div>
                            <div data-Aos="fade-left" >
                               <div className="LederMember">
                                   <div style={{backgroundColor:BackGroundChange&&"#1C2D4F",color:BackGroundChange&&"white" }} onClick={SwitchBackGroundValue01} className="Member">
                                        <p style={{fontSize:"15px"}}> <ModalComunite setCommunte={setCommunte} Communte={Communte} ComunteAll={ComunteAll} BackGroundChange={BackGroundChange}/></p>
                                       
                                   </div>
                                   <div onClick={SwitchBackGroundValue} style={{backgroundColor:!BackGroundChange&&"#1C2D4F",color:!BackGroundChange&&"#f4f4f4"}} className="leader">
                                        <p style={{fontSize:"15px"}}>Leader</p>
                                        {console.log(BackGroundChange)}
                                   </div>
                                   
                               </div>

                            </div>
                          
                                 {BackGroundChange ? <div className="Test05" > 
                              <p>{Communte&&Communte}</p>
                                 </div> :  <div  >
                                <input value={Communte} style={{border:input02&&'1px solid #C12026'  }}  onChange={(e)=>setCommunte(e.target.value)} placeholder="Nom communauté"/>
                                {input02&&<h6  data-Aos="fade">Entre your Communte</h6>} 
                            </div>}
                      
                            <div data-Aos="fade-left">
                                <input value={Siret} style={{border:input03&&'1px solid #C12026'  }}  onChange={(e)=>setSiret(e.target.value)} placeholder="Siret"/>
                                {input03&&<h6  data-Aos="fade">Entre your Siret</h6>} 
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
                <div className="FlexBox">
                    <button onClick={precedent} className="Precedent2"  >Precedent</button>
                   <button className="Suivant" onClick={NextStep02} >Suivant</button>
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
