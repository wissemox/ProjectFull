import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import { Progress } from 'reactstrap'; 
import {useDispatch} from 'react-redux'
import {registerUser} from '../../js/actions/authActions'
const RegisterCheck02 = ({Step3d , Step3}) => {
    const email =JSON.parse(localStorage.getItem('Email')) 
    const username =JSON.parse(localStorage.getItem('username')) 
    const nomcommunaute =JSON.parse(localStorage.getItem('Communite')) 
    const Sexe =JSON.parse(localStorage.getItem('ex')) 
    const role =JSON.parse(localStorage.getItem('LederName')) 
    const DateNaissance=JSON.parse(localStorage.getItem('Date')) 
    const [UserName , setUsername]=useState('')
    const [Test , setTest]=useState('')
    const dispatch =  useDispatch()
    const RegisterUser =() =>{
        dispatch(registerUser({email:"wissmdazefzd@gmail.com" , username:"Mezni" ,password:"Binpact12" , role:"leadzqer" ,nomcommunaute:"strinzqdg",Sexe:"homme",DateNaissance:"2012-04-28" }))
    }
    return (
        <div>
            {console.log(email)}
            {console.log(username)}
            {console.log(nomcommunaute)}
            {console.log(Sexe)}
               <div className="text-center">75%</div>
      <Progress data-Aos="fade-left" value="75" />
      {UserName&&Test ? null : <p>Enter all filed</p> }
                {Step3 ? <Redirect to="/login"/> : <>
                <div  data-Aos="fade-up" className="Input06">

             
<img src="UserName.png"/>
{console.log(UserName)}
<input value={UserName}  onChange={(e)=>setUsername(e.target.value)}  placeholder="LederName"/>
</div>
<div  data-Aos="fade-up" className="Input06">
<img src="UserName.png"/>

<input type="password"  value={Test} onChange={(e)=>setTest(e.target.value)}  placeholder="password" />
{console.log(Test)}
<div data-Aos="fade-up" className="Button">
<button onClick={()=>Step3d(UserName,Test)} >next</button>
<button onClick={RegisterUser}> Register</button>
<p>wissdmaz</p>

</div> 
</div>
                </>}
          
        </div>
    )
}

export default RegisterCheck02
