import React from 'react'
import './MapComunte.css'
const MapComunte = ({el , testChnage , toggle}) => {
    const dazdaf=()=>{
        localStorage.setItem('Nomcommunauté', JSON.stringify(el.domaine))
        testChnage(el.domaine)
        toggle()
        
    } 
    return (
        <div className="Slug">
           <h2  onClick={dazdaf} > {el.domaine.split(".com")}</h2> 
           
        </div>
    )
}

export default MapComunte
