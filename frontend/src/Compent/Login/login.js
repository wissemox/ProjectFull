import React,{useEffect , useState} from 'react'
import './Login.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import {useDispatch , useSelector} from 'react-redux'
import {logiUser , Test} from '../../js/actions/authActions'  
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Login = () => {
    useEffect(() => {
      Aos.init({duration: 2000});
    }, [])
    const BolenValue = useSelector(state => state.authReducer.redirect)
  const EeroreDetail = useSelector(state => state.authReducer.detail)
    const dispatch =useDispatch() 
    const LoginUser =()=>{
        dispatch(logiUser( {email:username ,password:Password} ))
        //  "email": "sender.binpact@gmail.com",

    }
    const TEST = ()=>{
        dispatch(Test())
    }
    const [username ,setName]=useState('')
    const [Password ,setPassword]=useState('')
    
    return (
        
        // FlexBox
    
        <div data-Aos="fade"  className="FlexBoxLogin">
             {console.log(BolenValue)}
             {console.log(EeroreDetail)}
           {BolenValue&&  <Redirect to="/Dashboard01"/>} 

            <div>
            <div   className="InputName">
                <h2 data-Aos="fade-up">Conncte</h2>
                <p>{EeroreDetail&&EeroreDetail}</p>
                {username.length===0 ? <p data-Aos="fade-up" >Empty Email</p>:null}
                    {Password.length===0 ? <p data-Aos="fade-up" >Empty password</p>:null}
                    <div data-Aos="fade-up" className="Username">
                    <img src="UserName.png"/>
                    <input value={username} onChange={(e)=>setName(e.target.value)} placeholder="username"/>
                    {console.log(username)}
                </div>

                <div value={Password} onChange={(e)=>setPassword(e.target.value)} data-Aos="fade-up" className="Username">
                    <img src="Password03.png"/>
                    <input placeholder="password"/>
                </div>
                <div  data-Aos="fade-up" className="Button">
                   
                    <div className="BakcGround08">
            </div>
           
           
                    <button onClick={LoginUser}>Login</button>
                    <div className="ForgetPassword">
                  <Link to="/password">  <p>Forget password</p> </Link>
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

export default Login
