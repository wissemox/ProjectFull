import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const UserinterfaceMap = ({el}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div>
            <div data-Aos="fade-right"  className="BackGrouda">
            <div data-Aos="fade-left"  className="Imadata">
               <img data-Aos="fade-up"  src={el.Img}/>
            </div>
            <div data-Aos="fade-left"  className="ButtonMaison">
                <button data-Aos="fade-up" >POUR VOTRE MAISON</button>
            </div>
            </div>
           
        </div>
    )
}

export default UserinterfaceMap
