import React,{useEffect} from 'react'
import './NavBar.css'
import Aos from 'aos'
import "aos/dist/aos.css"

const NavBar = ({Img}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div data-Aos="fade-up">
            <div data-Aos="fade-up" className="NavBard05">
                <div data-Aos="fade-up" className="NavBar5">
                <div data-Aos="fade-up" className="NavFlexbox">
                    <div data-Aos="fade-up" className="Go">
                        <p>GO</p>
                    </div>
                    <div  data-Aos="fade-up"className="InputUserInterface">
                        <input/>
                    </div>
                    <div  data-Aos="fade-up" className="User">
                        
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default NavBar
