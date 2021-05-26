import React , {useState,useEffect} from 'react'
import './Userinterface.css'
import UserinterfaceMap from './UserinterfaceMap'
import {useSpring , animated} from 'react-spring'
import Aos from 'aos'
import "aos/dist/aos.css"
const UserInerface01 = () => 
{  
    const Procentage =localStorage.getItem("profile_pourcentage")
    const Upload =JSON.parse(localStorage.getItem("Upload"))
    const Testla01 =useSpring({
        from:{
           
            backgroundColor: "#D8D8D8",
            
        }, 
        to:{
            backgroundColor: "#2A69B5",
         
            
        }
    })
    const Testla003 =useSpring({
        from:{
            
            webkitTransition: "1s",
            height:"120px",
     
            
        }, 
        to:{
            webkitTransition: "1s",
            height:"600px" ,
            
            
        }
    })
    const Testla =useSpring({
        from:{
            
            webkitTransition: "1s",
            height:"120px",
     
            
        }, 
        to:{
            webkitTransition: "1s",
            height:"400px"
          
            
            
        }
    })
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div className="adaz">
       <div className="Texasq">
           <p style={{color:Procentage==90 &&"#2A69B5" || Procentage==100 &&"#2A69B5" || Procentage==60 &&"#2A69B5" }}>Address</p> 
           <p style={{color:Procentage==90 &&"#2A69B5" || Procentage==100 &&"#2A69B5" || Procentage==60 &&"#2A69B5" }}>Email</p>
           <p style={{color:Procentage==90 &&"#2A69B5" || Procentage==100 &&"#2A69B5" }}>Confiremed Email</p>
        
             <p style={{color:Procentage==100&&Upload ?"#2A69B5":"#D8D8D8" }}>Image uploaded</p>
       </div>
        <div  data-Aos="fade-up" className="UserInterface5">
           
            <div className="PrograsBar03">
                
                <div  style={{backgroundColor:Procentage==90 &&"#2A69B5"||Procentage==60&&"#2A69B5" ||Procentage==100&&"#2A69B5"  }}>
                    <p>Address</p>
                </div>
                {console.log(Procentage)}
                <div className="Address" style={{backgroundColor:Procentage==90 &&"#2A69B5"||Procentage==60&&"#2A69B5" ||Procentage==100&&"#2A69B5" }}>
                    <p>Email</p>
                </div>
                <div className="ConfiremdEmail" style={{backgroundColor:Procentage==90 &&"#2A69B5"||Procentage==60&&"#D8D8D8"||Procentage==100&&"#2A69B5"  }}>
                    <p>Confiremed Email</p>
                </div>
                <div className="ImageUploadded"style={{backgroundColor:Procentage==100&&"#2A69B5"  }}>
                    <p>Image uploaded</p>
                </div>
                
                </div>
             <div className="PrograssBar">
              <div config={{duration: 8000}} style={{height:Procentage==60&&"180px" || Procentage==90 && "300px" ||Procentage==100 && "446px"}} className="PrograssBar01">
                <p>daz</p>
              </div>
                <p>zada</p>
                <p>zada</p>
            </div>
        </div>
        </div>
    )
}

export default UserInerface01
