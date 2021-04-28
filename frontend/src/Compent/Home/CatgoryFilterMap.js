import React from 'react'
import {Link} from 'react-router-dom'
const CatgoryFilterMap = ({el}) => {
    return (
        <div className="Text3">
             <Link to="/product01">   <p onClick={()=>localStorage.setItem('Catgory01', JSON.stringify(el.ProductFilter))}>{el.ProductFilter}</p> </Link>
        </div>
    )
}

export default CatgoryFilterMap
