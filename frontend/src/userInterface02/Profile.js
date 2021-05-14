import React,{useEffect} from 'react'
import './Profile.css'
import ModalExample from './Modal'
import Aos from 'aos'
const Profile = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
      }, [])
    return (
        <div  data-Aos="fade-up"  className="Profile02">
            <div  data-Aos="fade-up"   className="Profile05">
                <div>
                    <img   data-Aos="fade-up"  src="binpact002.png"/>
                </div>
            
               
                <div  data-Aos="fade-up"  className="Imageoda">
                <img   data-Aos="fade-up"  src="Wissemabid.png"/>
                </div>
                <div  data-Aos="fade-up"  className="Texaxdt5">
                    <p>Wissem abid</p>
                </div>
                <div  data-Aos="fade-up"  className="Buttonda">
                <button>Logout</button>
                </div>
              
            </div>
            <div className="Texdt8">
                <h1>HI WISSEM </h1>
                <p>Welcome your profile</p>
            </div>
            <div className="ALLCarf">

            
            <div className="Card">
                <h3>Current state</h3>
                <div className="Presntage">
                <h3>23%</h3>
                </div>
                <div className="BackGroundaq">
                <p>dazd</p>
                <div className="Text8a">
                <p>dzadazdaz dzadazdazf dzadazdazff dzadazdaz dzadazdazf dzadazdazff</p>
               
                </div>
            </div>
            </div>
            <div className="Paymen02">
                 <div className="Paymen">
                     <p>Payment Methode</p>
                     <h2>2345.35$</h2>
                     <div className="TextPayment">
                        <p>dazdazfazd zdazdfazd rz"efzfze  az zfefz</p>
                     </div>
                 </div>
                 <div className="Image8a">
                <img src="MasterCard.png"/>
                </div>
                 </div>
            </div>
            <div className="VerfactionBar">
                <div className="TextPrestage">
                <p>14.2%</p>
                <p>12.5%</p>
              
                </div>
                <div className="LevelBarAD">
                    <p>23.7%</p>
                </div>
            <div className="TextPrestage05">
                <p>Email Verfaction</p>
                <p>Phone verfaction</p>
                <p>Payment verfcation</p>
            </div>
            </div>
            <div className="Model">
            <ModalExample/>
            </div>

        </div>
    )
}

export default Profile
