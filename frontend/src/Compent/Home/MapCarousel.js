import React ,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const MapCarousel = ({el , Card}) => {
    useEffect(() => {
        Aos.init({duration: 3000});
      }, [])
    return (
        <div className="da">
           <div data-Aos="fade"  className="CarouselImage6">
          
           <img  data-Aos="fade-up"  src="kisspng-ipad-apple-iphone-4-icon-apple-computer-5a7ea6736be3a2.0446625615182495874419.png"/>
           </div>
       
        </div>
    )
}

export default MapCarousel
