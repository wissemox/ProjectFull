import React,{useEffect , useState} from 'react'
import './Register.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import RegisterCheck01 from './RegisterCheck1'
import { Progress } from 'reactstrap';

const Register = ({Verf0action,Verfaction1,Test,Bloena,Step2d,Step2,Step3d ,Step3 , Verfaction02}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const[userName , setuserName]=useState('')
    const[Email , setuserEmail]=useState('')
     const[confirmEmail , setconfirmEmail]=useState('')
     const[password , setpassword]=useState('')
     const[BolenUsername , SetBolenUsername]=useState(false)
     const[Test08 , setTest08]=useState(false)
     const[Verfication,setVerfaction]=useState(0)
    if(Bloena){
        localStorage.setItem("username", JSON.stringify(userName));
        localStorage.setItem("Email", JSON.stringify(Email));
        localStorage.setItem("confirmEmail", JSON.stringify(confirmEmail));
        localStorage.setItem("password", JSON.stringify(password));
        localStorage.setItem("Verfaction", JSON.stringify(Verf0action));
    }
    
    {console.log(Verfication)}
    const LederFunction =(test)=>{
        if(test==="leader"){
            setTest08(true)
        }   if(test!="leader"){
            setTest08(false)
        }
      
    }
  const Test05 = () =>{
    Test(userName,Email,confirmEmail,password)
    Verfaction1(Email,userName)
  }
  {console.log(userName)}
  {console.log(Verf0action)}
  const check = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)


           

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
  
  
  
    return (
        <div className="BackGroundRegister">
            
               <div className="Background02">
            <div data-Aos="fade-up" className="Register01">
            <h2 data-Aos="fade-up">Register</h2>
            {console.log(BolenUsername)}
            
            {Bloena ?<RegisterCheck01 Verf0action={Verf0action} Verfaction02={Verfaction02}  Test08={Test08} LederFunction={LederFunction} Step3d={Step3d} Step2d={Step2d} Step2={Step2} Step3={Step3} />: <> 

                <div  data-Aos="fade-up" className="Input06">
                    <div className="text-center">10%</div>
                    {/* <Progress /> */}
                    <div className="Progress05" >
                        <div className="Progress06">
                        <p>dazda</p>
                        </div>
                      
                    </div>
                    {Email.includes('@') ? null : <p data-Aos="fade-up" >Entre Real Mail</p>}
                    {userName && Email && confirmEmail  ? null :<p data-Aos="fade-up" >Enter all filed</p>}
                   
                    {Email!==confirmEmail ? <p data-Aos="fade-up" >Check your mail</p> : null}
                        <img src="UserName.png"/>
                        <input value={userName}  onChange={(e)=>setuserName(e.target.value)} placeholder="Username"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Email.png"/>
                        <input  value={Email} onChange={(e)=>setuserEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Email.png"/>
                        <input value={confirmEmail} onChange={(e)=>setconfirmEmail(e.target.value)}   placeholder="Confirm Email"/>
                    </div>
                   
                    <div data-Aos="fade-up" className="Button">
                        <button onClick={Test05} >next</button>
                    </div>
                    
            </> }
           
                </div>
                <div data-Aos="fade-up" className="adzd">
               <img src="Flash01.png"/>
                </div>
            
                </div>
                    
            <div>
            </div>
            <div data-Aos="fade-up" className="ImageRegister">
                
                <img src="LoginImage02.png"/>
            </div>
        </div>
    )
}

export default Register
