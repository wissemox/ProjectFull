import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Produitsmap = ({el}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div data-Aos="fade-left" className="ProduitsMap03">
            <div className="Backgroundhwite">
                <img src={el.Image}/>
                
            </div>
            <div className="Bdutton">       
            <button>Trouquez maintenant</button>
            </div>
            
            
            
        </div>
    )
}

export default Produitsmap
