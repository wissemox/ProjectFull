import React,{useEffect} from 'react'
import Rate from './Image02/Rate'
import Aos from 'aos'
const Product03Map = ({el}) => {
    useEffect(() => {
        Aos.init({duration: 3000});
      }, [])
    return (
        <div>
        <div className="AllProduct">
           <div  data-Aos="fade-left" className="Image">
               <div>
               <img src={el.Image}/>
               </div>
               <div className="ImageProfile">
               <img src="ProfileImage.png"/>
              
               </div>
               <div className="Text08P">
                    <p>wissem abid</p>
                </div>
           </div>
           <div  data-Aos="fade-right" className="TextH2">

           <div className="LikeImage">
               <img src="Like.png"/>
               </div>
            <h2>{el.name}</h2>
          
           <div className="HightTech">
               <div className="HightTechazd">
               <p>Hight-tech</p>
               
               <div className="Samunge">
               <p>Phone</p>
               <div className="PhoneName">
               <p>Samsung</p>
               </div>
               </div>
               </div>
            
           </div>
          
           <div className="Etat">
              <b> <h3>Etat :</h3></b>
               <p>Perfait</p>
           </div>
           <div className="Descraption">
            <p>{el.descraption}</p>
           </div>
           </div>
        
        
              <div className="Prix8">
               <div className="daz">
               <b><p>Prix:</p></b>
     
           </div>
           <div className="Rate">

            <div className="Rated">
           <Rate  data-Aos="fade-up" Rate={el.Rate}/>
           </div>
           </div>
          
           </div>
      
            <div className="Daties">
                <div>
                <img src="gps.png"/>
                </div>
                <p>Kantaoui, Sousse </p>
                <div className="Time">
                    <div>
                    <img src="Time.png"/>
                    </div>
                   
                    <p>il y a 2 heures</p>
                </div>
            </div>
           
           <div   data-Aos="fade-up" className="Button02">
              
           <button  data-Aos="fade-up" >Torquez maintenant</button>
           </div>
        </div>
        </div>
    )
}

export default Product03Map
