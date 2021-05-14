import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import { Progress } from 'reactstrap'; 
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from '../../js/actions/authActions'
import Alert from '../../Share/Alert'

const RegisterCheck02 = ({Step3d , Step3}) => {
    const Errore = useSelector(state => state.authReducer.errors)
    const Data = useSelector(state=>state.authReducer.data)
    const email =JSON.parse(localStorage.getItem('Email')) 
    const username =JSON.parse(localStorage.getItem('username')) 
    const nomcommunaute =JSON.parse(localStorage.getItem('Communite')) 
    const sexe =JSON.parse(localStorage.getItem('Sex')) 
    const role =JSON.parse(localStorage.getItem('LederName')) 
    const DateNaissance=JSON.parse(localStorage.getItem('Date')) 
    const [UserName , setUsername]=useState('')
    const [Test , setTest]=useState('')
    const dispatch =  useDispatch()
    const RegisterUser =() =>{
        dispatch(registerUser({ prenom:"Abid",email:email, adresse:"string" ,tel:"string",pays:"string",ville:"string",nom:username,code_postal:150, username:username,password:UserName , role:role ,nom_communaute:nomcommunaute,sexe:sexe,date_naissance:DateNaissance}))
    }
    return (
        <div>
            {/* {Errore &&  <Alert Errore={Errore}/> } */}
             
            {console.log(role)}
            {console.log(email)}
            {console.log(username)}
           
            {console.log(DateNaissance)}
               <div className="text-center">75%</div>
               <div className="Progres01">
          <div className="Progres04">
              <p>50%</p>
          </div>
      </div>
      
      {UserName&&Test ? null : <p>Enter all filed</p> }
                {Step3 ? <Redirect to="/login"/> : <>
                <div  data-Aos="fade-up" className="Input06">
           
             
<img src="UserName.png"/>

{console.log(UserName)}

{Errore && <Alert Errore={Errore} />}
<input value={UserName}  onChange={(e)=>setUsername(e.target.value)}  placeholder="password"/>
</div>

<div  data-Aos="fade-up" className="Input06">
    
<img src="UserName.png"/>
{Data && <Redirect to="/login"/>}
<input type="password"  value={Test} onChange={(e)=>setTest(e.target.value)}  placeholder="Confirm password" />

{console.log(Test)}
<div data-Aos="fade-up" className="Button">
       
{/* <button onClick={()=>Step3d(UserName,Test)} >next</button> */}
<button onClick={RegisterUser}> Register</button>
<p>wissdmaz</p>

</div> 
</div>
                </>}
          
        </div>
    )
}

export default RegisterCheck02
