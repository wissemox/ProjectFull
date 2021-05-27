import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Login from './Compent/Login/login'
import Register from './Compent/Register/Register'
import {BrowserRouter ,Route, Switch} from 'react-router-dom'
import Home from './Compent/Home/Home'
import Catgory from './Compent/Catgory/Catgory'
import Producdt from './Compent/Home/Product03'
import Confirm from './Compent/Confirm/Confirm'
import User from './Compent/userInterface/User'
import User02 from './userInterface02/User02'
import Profile from './userInterface02/Profile'
import ResetPassword from '../src/Compent/Login/ResetPassword'
import "aos/dist/aos.css"
import PriverRoute02 from './Compent/routes/PrivateRoutes'
import Test01 from './Test'
import Register02 from './Compent/login02/login'
import Register4 from './Compent/login02/Register02Check4'
import Check from './Compent/routes/Check'
import ProfileUpdate from './userInterface02/ProfileUpdate'
import ProgresBar from './userInterface02/ProgresBar'
function App() {
  // Function
    // 1 userName 
  const [Bloena  , setBolen ]=useState(false)
  const [Bloena02  , setBolen02 ]=useState(false)
  const [Bloena03  , setBolen03 ]=useState(false)
  const [LengthBolen  , setLengthBolen ]=useState(false)
  const [Step2  , setStep2 ]=useState(false)
  const [Step3  , setStep3 ]=useState(false)
  const [Verf0action  , setVerfaction ]=useState(0)
  const ConfirmEmail = JSON.parse(localStorage.getItem('Token')) 
  const Test =(UserName,Email , ConfirmEmail , password )=>{
    if(UserName && UserName.length>6 && Email && ConfirmEmail && Email===ConfirmEmail &&Email.includes('@')&&ConfirmEmail.includes('@')  ){
      console.log('dqzdq')
      setBolen(true)
      console.log(Bloena)
    }else{
      console.log("le")
    }
  }
  const Test03 =(Nom , Pernom ,Email , Modpaas , confirmModpass )=>{
    if(Nom && Pernom && Email && Modpaas && Email.includes('@') && Modpaas===confirmModpass &&  Modpaas.length>=6){
      setBolen(true)
    
  }
}
const Test04 =(NomCommunauté , Secture ,siret ,  nomentreprizde )=>{
  if(NomCommunauté&&Secture&&siret&&nomentreprizde){
    setBolen02(true)
  }

}
const Prevlise =( )=>{

    setBolen02(false)
  

}
const Test05 =(Sexe , Date  ,Adress , Ville , Pays )=>{
  if(Sexe&&Date&&Adress&&Ville&&Pays){
    setBolen03(true)
  }
  console.log(Bloena03)
}

  // Setp2 
 
  const Step2d =(Communite,LederName , Date ,Sex)=>{
    if(Communite || LederName && Date && Sex  ){
      console.log('dqzdq')
      setStep2(true)
      console.log(Step2)
    }else{
      console.log("le")
    }
  }
  //setp3
  const Step3d =(LederNamed,Test  )=>{
    if(LederNamed && Test && LederNamed===Test && LederNamed.length>=5 ){
      console.log('dqzdq')
      setStep3(true)
      console.log(Step3)
    }else{
      console.log("le")
    }
  }

  // Verfaction System
  const Verfaction1 =(Usersdname , Email )=>{
    if(Usersdname||Email)  {
      setVerfaction(15)
    }
    if(Usersdname&&Email) {
      setVerfaction(30)
    }
  }
  const Verfaction02 =(role , comunite , Datadenasisence , sex )=>{
    if(role||comunite)  {
      setVerfaction(Verf0action+30)
    }
    if(Datadenasisence||sex)  {
      setVerfaction(Verf0action+30)
    }
    // Verf0action
    if(role&&comunite&&Datadenasisence&&sex) {
      setVerfaction(75)
    }
  } 
  
  return (
    
    <div  className="App">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      <BrowserRouter>
      <Route exact path="/login" render={()=><Login/>}></Route>
      <Route exact path="/register" render={()=><Register Verfaction02={Verfaction02} Verf0action={Verf0action} Verfaction1={Verfaction1} Test={Test} Bloena={Bloena} Step2d={Step2d} Step2={Step2} Step3d={Step3d} Step3={Step3} setBolen02={setBolen02} />}></Route>
      {/* <Route exact path="/register/1" render={()=><Register Test={Test} Bloena={Bloena} />}></Route> */}
    
      <Route  exact path="/" render={()=> <Home/> } /> 
    
      {console.log(ConfirmEmail)}
      <Route exact path="/Catgory" render={()=><Catgory/>} /> 
      <Route exact path="/Product" render={()=><Catgory/>} />
      <Route exact path="/Product01" render={()=><Producdt/>} />
      <Route exact path="/password" render={()=><ResetPassword/>} />
      <Route exact path="/Test" render={()=><Test01/>} />
      {ConfirmEmail&&    <Route exact path="/Confirm" render={()=><Confirm/>} />}
      {/* User */}
     
      {/* Producdt */}
      {/* Confirm */} <Route  path="/Dashboard01/profile" component={User}/>
                 {/* <PriverRoute02 exact path="/Dashboard01" component={User02}></PriverRoute02>   */}
                 <Route exact path="/Dashboard01" render={()=><User02/>} /> 
                
                 <Route exact path="/Dashboard01/boutique" render={()=><ProfileUpdate/>} /> 
                 {/* <Route exact path="/Dashboard01/Profie" render={()=><ProgresBar/>} /> */}
                      <Route  path="/Profile" component={Profile}/>
                      
      <Route exact path="/Confirm" render={()=><Confirm/>} />
      <Route exact path="/Confirm" render={()=><Confirm/>} />
      <Route exact path="/Login02" render={()=><Register02  Prevlise={Prevlise} setBolen={setBolen} Test05={Test05} Bloena02={Bloena02} Test04={Test04} setLengthBolen={setLengthBolen} LengthBolen={LengthBolen}  Bloena={Bloena} Test03={Test03}/>}/>
      <Route exact path="/Favoire" render={()=><Register4/>}/>
      <Route exact path="/Check/:token" render={({match})=><Check match={match.params.token}/>}/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
