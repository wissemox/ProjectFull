import React from 'react'
import './Check.css'
import Counter from '../../Share/CounterOne'
import SvgComponent from '../../ImageTes'
const Check = ({match}) => {

    return (
        <div>
            <div className="BackGroundImageCHeck">
                <div className="Verfaction">
            <img  src="/Binpact.png"></img>
            <div className="SvgCompent">
            <SvgComponent className="Ratironaz"/>
            </div>
            
            <p>THNKS FOR JOINIG</p>
            <div className="Yourregstersuscful">
            <h2>Your registration is complete</h2>
            <p>{match}</p>
            </div>
            <Counter/>
            </div>
            </div>
          
            {console.log(match)}
  
           
        </div>
    )
}

export default Check
