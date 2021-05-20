import React ,{useState} from 'react'
import { Redirect } from 'react-router'
import './Register02Check4.css'
const Register02Check4 = () => {
    const [Bollen , setBollen]=useState(false)
    return (
        <div  className="DisplayFlex4">
            {Bollen && <Redirect to="/login"/>}
        <div data-Aos="fade" className="BakGroundLogin02d">
               
                <div className="Categories">
                <h1>CATEGORIES</h1>

               
                </div>
                <div className="Catgpry">
                    <p onClick={()=>setBollen(true)}>Height Tech</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    <p>Mebules</p>
                    
                </div>
                 
            
                 <div className="Accomplid">
                 <span>100% Accompli..</span>
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
                     <div className="AniatedNumber4Bar">
                         <p>4</p>
                     </div>
                    
                    
                 </div>
                 
                
             <div className="Animation">
                 
               <div  className="AnimatipnBackGroundBlue04">
                  
               </div>
             </div>
        </div>
        {/* Flex here */}
        
     </div>
    )
}

export default Register02Check4
