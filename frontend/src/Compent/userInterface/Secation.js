import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Secation = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div  data-Aos="fade-up" className="AllSectoure">
        <div  data-Aos="fade-up" className="Containte">
            <div  data-Aos="fade"   className="ImageBlock">
           <img data-Aos="fade-up"  data-Aos="fade-up"  src="Binpact.png"/>
           <img data-Aos="fade-up" src="Dashboard.png"/>
           <img data-Aos="fade-up" src="Profile.png"/>
           <img data-Aos="fade-up" src="Agenda.png"/>
           <img data-Aos="fade-up" src="Graph.png"/>
           <img data-Aos="fade-up" src="LeaderBoard.png"/>
           </div>

           <div data-Aos="fade-up"   className="Test">
               <div data-Aos="fade-right"  className="ImgaeBinpact">
            <img data-Aos="fade-right"  src="binpact002.png"/>
            <div  data-Aos="fade-up"className="ImageBinact">
                <div data-Aos="fade-up" className="DashboardFleXbOX">
                <img data-Aos="fade-right" style={{width:"30px"}} src="Dashboard.png"/>
                <p>Dashboard</p>
                </div>
                <div className="Profile">
            <img data-Aos="fade-right" style={{width:"30px"}}  src="Profile.png"/>
            <p data-Aos="fade-right">Profile</p>
            </div>
            <div className="Agenda">
            <img data-Aos="fade-right" style={{width:"40px"}}  src="Agenda.png"/>
            <p data-Aos="fade-right">Agenda</p>
            </div>
            <div className="Graph">
            <img data-Aos="fade-right" style={{width:"40px"}}  src="Graph.png"/>
            <p data-Aos="fade-right">Graph</p>
            </div>
            <div className="LeaderBoard">
            <img data-Aos="fade-right" style={{width:"40px"}}  src="LeaderBoard.png"/>
            <p data-Aos="fade-right">LederBoard</p>
            </div>
           </div>
            </div>
           </div>
        </div>
     
        </div>
    )
}

export default Secation
