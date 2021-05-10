import React,{useEffect} from 'react'
import './leder.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Leder = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <>
        <div data-Aos="fade-up"  className="Leder5">
         <b>   <p>Top leder</p></b> 
         <div data-Aos="fade-up"  className="LederRank1">
             <div>
            <img data-Aos="fade-up"  src="Faraha.png"/>
            </div>
            <div data-Aos="fade-up"  className="ImageLeder">
            <h3 data-Aos="fade-up" >Wissem abid</h3>
                <p>Rank 1</p>
            </div>
            
            
        </div>
        <div data-Aos="fade-up"  className="LederRank2">
             <div>
            <img data-Aos="fade-up"  src="Omar.png"/>
            </div>
            <div data-Aos="fade-up"  className="ImageLeder">
            <h3 data-Aos="fade-up" >Faraw abid</h3>
                <p data-Aos="fade-up" >Rank 2</p>
            </div>
            
            
        </div>
        <div className="LederRank3">
             <div>
            <img src="Mohmaed.png"/>
            </div>
            <div className="ImageLeder">
            <h3>Omar meldi</h3>
                <p>Rank 3</p>
            </div>
            
            
        </div>
        </div>
       
        </>
    )
}

export default Leder
