import React from 'react'
import {Link} from 'react-router-dom'
const RecharcheMap = ({el}) => {
    const ResercHarcheFilter=()=>{
        localStorage.removeItem("Catgory")
        localStorage.setItem('Catgory01', JSON.stringify(el.ProductFilter))
        window.location.reload(false);
    }
    return (
        <div className="Text3">
              <p onClick={ResercHarcheFilter}>{el.ProductFilter}</p> 
        </div>
    )
}

export default RecharcheMap
