import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'
const Secation = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div  data-Aos="fade-up" className="AllSectoure">
        <div  data-Aos="fade-up" className="Containte">
           
      
           <div data-Aos="fade-up"   className="Test">
               <div data-Aos="fade-right"  className="ImgaeBinpact">
           
            <div  data-Aos="fade-up"className="ImageBinact">
         
                <div data-Aos="fade-up" className="DashboardFleXbOX">
              
            
                </div>
                <div className="Profile">
              <Link to="/Dashboard01/profile" >  <p>Profile</p></Link>
            </div>
            <div className="Agenda">
            <p>CompleteTask</p>
            </div>
            <div className="Graph">
          <Link to="/Dashboard01/profile/updateProfile"> <p>Upload image</p></Link>
            </div>
            <div className="LeaderBoard">
          
            </div>
           </div>
            </div>
           </div>
        </div>
     
        </div>
    )
}

export default Secation
