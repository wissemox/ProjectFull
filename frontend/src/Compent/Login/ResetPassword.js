import React from 'react'
import { Input } from 'reactstrap'
import {useDispatch} from 'react-redux'
import {ResetPassword01} from '../../js/actions/authActions'
const ResetPassword = () => {
    const dispatch=useDispatch 

    return (
        <div data-Aos="fade"  className="FlexBoxLogin">
        <div>
        <div   className="InputName">
            <h2 data-Aos="fade-up">Reset</h2>
      <p data-Aos="fade-up" >Empty Email</p>:null
              <p data-Aos="fade-up" >Empty password</p>
                <div data-Aos="fade-up" className="Username">
                <img src="UserName.png"/>
                <Input placeholder="Email"/>
                
            </div>

            <div  data-Aos="fade-up" className="Username">
                <img src="Password03.png"/>
                <input placeholder="ChangePassword"/>
                
            </div>
            <div  data-Aos="fade-up" className="Username">
                <img src="Password03.png"/>
                <input placeholder="Verfaction"/>
                
            </div>
            <div  data-Aos="fade-up" className="Button">
               
                <div className="BakcGround08">
         
           
        </div>
       
       
                <button>Login</button>
                <div className="ForgetPassword">
        </div>
            </div>
            
            </div>
           <div  data-Aos="fade-up" className="Image5">
           <img src="Flash01.png"/>
           </div>
        </div>

        <div data-Aos="fade-up" className="ImageLogin">
            <img src="LoginImage02.png"/>
        </div>
       
    </div>
    )
}

export default ResetPassword
