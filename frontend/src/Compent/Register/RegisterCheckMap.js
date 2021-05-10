import React from 'react'

const RegisterCheckMap = ({el , setTakeName , setTruefalse}) => {
        const Togel = () =>{
            setTruefalse(true)
            setTakeName(el.Name)
        }
    return (
        <div>
            <div className="BacKGroundImage">
            <p onClick={Togel}>{el.Name}</p>
            </div>
          
        </div>
    )
}

export default RegisterCheckMap
