import React,{useEffect} from 'react'
import './image.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Image = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div  data-Aos="fade-right" className="Image" >
       
        </div>
    )
}

export default Image
