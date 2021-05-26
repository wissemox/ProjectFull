import React from 'react'
import "./ProgressBar.css"
import {BrowserRouter ,Route, Switch} from 'react-router-dom'
const ProgresBar = () => {
    return (
<>  
<BrowserRouter>
<div className="flexBoxProgress02">
        
      <div className="Profile02">
            <div>
            <p>Barre de progression</p>
            </div>
          <div>
          <p>Change password</p>
          </div>
          <div>
          <p>Complete les task</p>
          </div>
      </div> 
      
      <div>
        
        <Route  path="/Dashboard01/Profie/ResetPassword" render={()=><p>Reset Password</p>} />
        <Route  path="/Dashboard01/Profie/CompleteTask" render={()=><p>Task Complete</p>} />
      </div>
        </div>
        </BrowserRouter>
        </>
    )
}

export default ProgresBar
