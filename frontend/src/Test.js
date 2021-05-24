import React,{useState} from 'react'
import { Background } from 'react-parallax'
import {useSpring , animated} from 'react-spring'
import  SvgComponent from './ImageTes'
const Test = () => {
    const[Truda , setTruda]=useState(false)
    const[dTruda , sedtTruda]=useState(false)
    const[dTruda01 , sedtTruda01]=useState(false)
   const Testla =useSpring({
        from:{
            
            webkitTransition: "1s",
            width:"120px",
            color:"red",
            marginTop:"30px"
            
        }, 
        to:{
            webkitTransition: "3s",
            width:"800px",
            backgroundColor:"red",
            color:"white",
            marginTop:"650px"
            
        }
    })
    const Testla02 =useSpring({
        from:{
            
            webkitTransition: "1s",
            width:"450px",
            color:"red",
            marginTop:"30px"
            
        }, 
        to:{
            webkitTransition: "3s",
            width:"800px",
            backgroundColor:"Blue",
            color:"white",
            marginTop:"150px"
            
        }
    })
    const d =useSpring({
        from:{
            width:"200px"
            
        },
       
        to:{
            width:"1500px"
        }
       
    })
  
    const Testla0f3 =useSpring({
        from:{
            webkitTransition: "5s",
         
            marginTop:"50px"
            
        }, 
        to:{
            webkitTransition: "3s",
            marginTop:"100px"
            
        }
    })
    const Test04=useSpring({
        width:dTruda01 ? "120px":"200px"
    })
    return (
        <>
        <animated.div style={Test04}>
            <button onClick={()=>sedtTruda01(!dTruda01)}>OK</button>
            {console.log(dTruda01)}
        </animated.div>
        <animated.div>
        <div> 
            <animated.div style={d} className="A">
                <p>dazd</p>
            </animated.div>
        </div>
            <animated.img   style={dTruda?null:Testla0f3}  src="TESt05zd.png"/>
            <animated.img  onfig={{duration: 6000}}onClick={()=>sedtTruda(!dTruda)} src="InpactTest.png"/>
        </animated.div>
        <animated.div config={{duration: 6000}} style={Truda?Testla:Testla02}>
            <p>wissm</p> 
            <img  className="Ratironaz" src="TESt05zd.png"/>
            <button onClick={()=>setTruda(!Truda)}>dad</button>
        </animated.div>
        
        </>
    )
}

export default Test




