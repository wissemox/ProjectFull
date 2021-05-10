import React,{useEffect} from 'react'
import './Image038.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import Rate0 from './Rate'
const Image02 = ({setRate ,Rate}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
       

        
            <div data-Aos="fade-right"  className="BackgroundPhoto" >
              
              <div className="Image8">
              <img src="ASsesta.png"/>
              </div>
              <div className="Noteetavis">
                <p>Note et avis</p>
                <span>★	</span>
                <span>★	</span>
                <span>★	</span>
                <span>★	</span>
                <span>☆		</span>
                <h1>4</h1>
              </div>
              

              <div className="Avs">
                <h2>Noter cete plateforme</h2>
                <p>Donnes votre avis ux utilisateurs</p>
               <Rate0 Rate={Rate} setRate={setRate} />
                <h3>Regigez un avis</h3>
              </div>

        </div>
        
    )
}

export default Image02
