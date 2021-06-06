import React from 'react'

const MapComunte = ({el ,testChnage , toggle}) => {
    const dazdaf=()=>{
       localStorage.setItem('Nomcommunauté', JSON.stringify(el.domaine))
        testChnage(el.domaine)
         toggle()

     } 
    return (
        <div className="w-100">
           <h2 onClick={dazdaf}  className="  text-base text-center	"  > {el.domaine.split(".com")}</h2> 
           
        </div>
    )
}

export default MapComunte
