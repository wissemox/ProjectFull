import React,{useEffect} from 'react'
import './Profile.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Profile = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <>
        <div data-Aos="fade-up"    className="Profiled">
           <div data-Aos="fade-up"  className="Imagedd">
               <img src="Wissemabid.png"/>
           </div>
       
           <div data-Aos="fade-up"  className="NameText">
               <p data-Aos="fade-left" >wissem abid</p>
           </div>
          
        
        </div>
        <div  data-Aos="fade-up"  className="Updatea">
               <h3 data-Aos="fade-rigth" >Last updtaed</h3>
               <p data-Aos="fade-left" >GetProduct</p>
               <p data-Aos="fade-right" >Exchange</p>
           </div>
         
        </>
        
    )
}

export default Profile
