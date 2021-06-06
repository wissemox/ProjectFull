

// Import Css
import React ,{useState} from'react'
import './Css/heaight/Heaight.css'
import './Css/Widht/Widht.css'
import './Css/BackGroundImageurl/BackgroundImageurl.css'
import './Css/margin/margin.css'
import './Css/Resposive/Register.css'
import './Css/Animation/ProgressBar.css'
import './App.css'
import './Css/padding/padding.css'
import './Css/Resposive/HomePage.css'
import './Css/Animation/AnimationLogo.css'
import Home from './Compent/Home/Home.jsx'
// Import Router 
import {Route , BrowserRouter } from 'react-router-dom'
//Compe Imported 
import Register from './Compent/Register/Register.jsx'

function App() {
  // Function 
  // Registe 1 
  const [RedirectRegister , setRedirectRegister]=useState(false)
  const [RedirectRegister2 , setRedirectRegister2]=useState(false)
  const RegisterFunction1 =(Nom , Pernom ,Email , Modpaas , confirmModpass )=>{
    if(Nom && Pernom && Email && Modpaas && Email.includes('@') && Modpaas===confirmModpass &&  Modpaas.length>=6){
      setRedirectRegister(true)
    
  }
  }
  // Register02 
  const RegisterFunction2 =(Sectur , Comunites,Siret ,Nomentreprise )=>{
    if(Sectur&&Comunites&&Siret&&Nomentreprise){
      setRedirectRegister2(true)
    
  }
  }
  return (
    <div className="App">
      <BrowserRouter>
      {/* Register */}
      <Route exact path="/Register" render={()=><Register setRedirectRegister2={setRedirectRegister2} setRedirectRegister={setRedirectRegister} RedirectRegister={RedirectRegister} RegisterFunction1={RegisterFunction1} RegisterFunction2={RegisterFunction2} RedirectRegister2={RedirectRegister2}/> } />
      {/* HomePage */}
      <Route exact path="/" render={()=>  <Home/>}></Route>
     
      </BrowserRouter>

    </div>
  );
}

export default App;
