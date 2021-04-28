import React,{useEffect , useState} from 'react'
import './Login.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Login = () => {
    useEffect(() => {
      Aos.init({duration: 2000});
    }, [])
    const [username ,setName]=useState('')
    const [Password ,setPassword]=useState('')
    return (
        // FlexBox
        <div data-Aos="fade"  className="FlexBoxLogin">
            <div>
            <div   className="InputName">
                <h2 data-Aos="fade-up">Conncte</h2>
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
                    <button>Login</button>
                </div>
                
                </div>
               <div  data-Aos="fade-up" className="Image5">
               <img src="Flash01.png"/>
               </div>
            </div>

            <div data-Aos="fade-up" className="ImageLogin">
                <img src="LoginImage.png"/>
            </div>
        
        </div>
    )
}

export default Login
