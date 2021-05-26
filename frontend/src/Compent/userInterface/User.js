import React from 'react'
import './User.css'
import Secation from './Secation'
import NavBar from './NavBar'
import UserInerface01 from './UserInerface01'
import Profile from './Profile'
import Leder from './Leder'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Profile01 from './Profile/Porifle'
const User = () => {
    const Img = <img src="Wissemabid.png"/>
    return (
        
        <div className="DashBoardFlex">
            
            <BrowserRouter>
         
            <div className="Secation">
            <Secation/>  
              
                
            </div>
            <div className="NavBar01">
           <NavBar/>
              
         
               <div className="FlexBoxInreface">
                   <div>
                   
                   <Route exact path="/Dashboard01/profile" render={()=><UserInerface01/>}></Route>  
                   </div>
                   <div>
                   <Route exact path="/Dashboard01/profile" render={()=>   <Profile/>}></Route>  
                   
                    <div>
                    <Route exact path="/Dashboard01/profile" render={()=>   <Leder/>}></Route>  
                  
                    </div>
                   </div>
                  
                   <Route exact path="/Dashboard01/profile/updateProfile" render={()=> <Profile01/>}></Route>  
               </div>
            </div>
       
            </BrowserRouter>
        </div>
        
    )
}

export default User
