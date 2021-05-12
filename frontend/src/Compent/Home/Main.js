import React,{useEffect, useState} from 'react'
import "./Main.css"
import Aos from 'aos'
import "aos/dist/aos.css"

import {Link} from 'react-router-dom'
import {Parallax} from 'react-parallax'
const Main = ({BackgroundImage , setImage}) => {
    const[Bollen , SetBollent]=useState(false)
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const Voitere = () =>{
        localStorage.setItem("Catgory","Voitere" );
    }
 
    return (
        <Parallax bgImage={"WWW02.jpg"} strength={300}>
        <div className="MainFlexBox02">
            
        <div className="MainFlexBox02"> 
        <div className="Space">
            
        </div>
    
           
          
        <div  data-Aos="fade-up"  className="MainFlexBox">
            {console.log(BackgroundImage)}
                
            <div  data-Aos="fade-up" className="TextFlexBox02">
              
              <b><h4>Troquez des produits de qualité dans une communauté engagée !</h4></b>  
                <p>Des produits verifiées et validés par nos experts ! Ofire spéciale lancement
                     gratuite pour les 2000 premiers inscrits</p>
                     <button>Bloquez votre place maintenat</button>
            </div>
            <div  data-Aos="fade-up" className="BackGroundImage6">
                 <img data-Aos="fade-left" src="Ordinater5.png"/> 
                {/* Background65 */}
            </div>
           {BackgroundImage ?<div data-Aos="fade-up"  className="Catgories">
               <div> 
                   <div data-Aos="fade-up"  className="Button5">
                   <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" > Catgory</button>
                       </div>
             
               <div>
               <img src="Answer.png"/>
                   </div>
             
               </div>
          
               </div>
                :null } 
        </div>
    
        </div>
        
        </div>
        </Parallax>
        
    )
}

export default Main
